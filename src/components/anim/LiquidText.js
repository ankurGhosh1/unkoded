import { useRef, useId } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const VB_W = 1600;
const VB_H = 400;

// Giant word rendered as an SVG mask. A reveal layer (image or brand
// gradient) is only visible where the cursor blob overlaps the letters.
// The blob edge is distorted with feTurbulence + feDisplacementMap for
// the liquid / torn-cloth look, and trails the cursor via gsap.quickTo.
function LiquidText({ text = "UNKODED", image, dot, className = "" }) {
  const wrapRef = useRef(null);
  const uid = useId().replace(/:/g, "");
  const ids = {
    textMask: `lt-text-${uid}`,
    revealMask: `lt-reveal-${uid}`,
    liquid: `lt-liquid-${uid}`,
    grad: `lt-grad-${uid}`,
  };

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const wrap = wrapRef.current;
      const blobs = gsap.utils.toArray(".liquid-blob", wrap);
      const turb = wrap.querySelector(".liquid-turbulence");

      // Each blob follows the cursor with a different lag → liquid trail.
      const setters = blobs.map((blob, i) => ({
        x: gsap.quickTo(blob, "x", { duration: 0.25 + i * 0.25, ease: "power3" }),
        y: gsap.quickTo(blob, "y", { duration: 0.25 + i * 0.25, ease: "power3" }),
        r: [170, 120, 80][i] || 80,
      }));

      // Slow breathing of the noise so edges ripple even when idle.
      gsap.to(turb, {
        attr: { baseFrequency: "0.006 0.02" },
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const toViewBox = (e) => {
        const rect = wrap.getBoundingClientRect();
        return {
          x: ((e.clientX - rect.left) / rect.width) * VB_W,
          y: ((e.clientY - rect.top) / rect.height) * VB_H,
        };
      };

      const onMove = (e) => {
        const { x, y } = toViewBox(e);
        setters.forEach((s) => {
          s.x(x);
          s.y(y);
        });
      };

      const onEnter = (e) => {
        const { x, y } = toViewBox(e);
        blobs.forEach((blob, i) => {
          gsap.set(blob, { x, y });
          gsap.to(blob, {
            attr: { r: setters[i].r },
            duration: 0.6,
            ease: "power3.out",
          });
        });
      };

      const onLeave = () => {
        blobs.forEach((blob) => {
          gsap.to(blob, { attr: { r: 0 }, duration: 0.5, ease: "power3.in" });
        });
      };

      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerenter", onEnter);
      wrap.addEventListener("pointerleave", onLeave);
      return () => {
        wrap.removeEventListener("pointermove", onMove);
        wrap.removeEventListener("pointerenter", onEnter);
        wrap.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: wrapRef }
  );

  const textProps = {
    x: "50%",
    y: "77%",
    textAnchor: "middle",
    fontSize: 360,
    fontWeight: 800,
    textLength: VB_W - 24,
    lengthAdjust: "spacingAndGlyphs",
  };

  return (
    <div ref={wrapRef} className={`select-none ${className}`}>
      <svg
        className="block h-auto w-full"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        role="img"
        aria-label={text}
      >
        <defs>
          <filter id={ids.liquid} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              className="liquid-turbulence"
              type="fractalNoise"
              baseFrequency="0.012 0.028"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="120"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="1.5" />
          </filter>

          <linearGradient id={ids.grad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e9e9e9" />
            <stop offset="55%" stopColor="#9c9c9c" />
            <stop offset="100%" stopColor="#4a4a4a" />
          </linearGradient>

          {/* Letters — everything outside them is hidden */}
          <mask id={ids.textMask} maskUnits="userSpaceOnUse">
            <text {...textProps} fill="#fff">
              {text}
              {dot && "."}
            </text>
          </mask>

          {/* Watery cursor blobs — reveal only near the pointer */}
          <mask id={ids.revealMask} maskUnits="userSpaceOnUse">
            <rect width={VB_W} height={VB_H} fill="#000" />
            <g filter={`url(#${ids.liquid})`} fill="#fff">
              <circle className="liquid-blob" cx="0" cy="0" r="0" />
              <circle className="liquid-blob" cx="0" cy="0" r="0" />
              <circle className="liquid-blob" cx="0" cy="0" r="0" />
            </g>
          </mask>
        </defs>

        {/* Base word — inherits text color from the parent */}
        <text {...textProps} fill="currentColor">
          {text}
          {dot && <tspan fill={dot}>.</tspan>}
        </text>

        {/* Reveal layer, clipped to letters ∩ blobs */}
        <g mask={`url(#${ids.textMask})`}>
          <g mask={`url(#${ids.revealMask})`}>
            {image ? (
              <image
                href={image}
                x="0"
                y="0"
                width={VB_W}
                height={VB_H}
                preserveAspectRatio="xMidYMid slice"
              />
            ) : (
              <>
                <rect width={VB_W} height={VB_H} fill={`url(#${ids.grad})`} />
                <circle cx={VB_W * 0.25} cy={VB_H * 0.2} r="220" fill="#f5f5f5" opacity="0.55" />
                <circle cx={VB_W * 0.72} cy={VB_H * 0.85} r="260" fill="#333" opacity="0.6" />
              </>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}

export default LiquidText;
