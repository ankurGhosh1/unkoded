import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const MAX_PARTICLES = 20000;
const SAMPLE_W = 240;
const ACCENT = { r: 1.0, g: 0.255, b: 0.2 }; // #ff4133

/**
 * Portrait rendered as a cloud of dust particles (three.js). Particles are
 * sampled from the photo's bright pixels, so the facial features emerge
 * from the grain. Hovering blows the dust away around the cursor and the
 * real photo fades in underneath through a matching soft mask.
 */
function DustPortrait({ src, alt = "", className = "" }) {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const imgEl = imgRef.current;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      // No dust — just show the photo.
      imgEl.style.opacity = "1";
      return;
    }

    let disposed = false;
    let rafId;
    let cleanup = () => {};

    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (disposed) return;

      const W = wrap.clientWidth;
      const H = wrap.clientHeight;

      // --- Sample the photo's luminance to place dust ---------------------
      const sw = SAMPLE_W;
      const sh = Math.round((sw * H) / W);
      const sample = document.createElement("canvas");
      sample.width = sw;
      sample.height = sh;
      const ctx = sample.getContext("2d", { willReadFrequently: true });

      // Draw with object-fit: cover semantics so dust aligns with the img.
      const scale = Math.max(sw / img.width, sh / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      ctx.drawImage(img, (sw - dw) / 2, (sh - dh) / 2, dw, dh);
      const px = ctx.getImageData(0, 0, sw, sh).data;

      const home = [];
      const baseColor = [];
      const seeds = [];
      for (let y = 0; y < sh; y++) {
        for (let x = 0; x < sw; x++) {
          const i = (y * sw + x) * 4;
          const lum = (px[i] + px[i + 1] + px[i + 2]) / 765;
          // Bright pixels spawn dust far more often than shadow.
          if (Math.random() < Math.pow(lum, 1.6) * 0.85) {
            home.push(
              (x / sw - 0.5) * W + (Math.random() - 0.5) * 2,
              (0.5 - y / sh) * H + (Math.random() - 0.5) * 2
            );
            const v = Math.min(1, lum * 0.85 + 0.3);
            if (Math.random() < 0.025) {
              baseColor.push(ACCENT.r, ACCENT.g, ACCENT.b);
            } else {
              baseColor.push(v, v, v * 0.98);
            }
            seeds.push(Math.random());
          }
          if (home.length / 2 >= MAX_PARTICLES) break;
        }
        if (home.length / 2 >= MAX_PARTICLES) break;
      }
      const count = home.length / 2;

      // --- Three.js scene -------------------------------------------------
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(
        -W / 2,
        W / 2,
        H / 2,
        -H / 2,
        0.1,
        10
      );
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      renderer.domElement.style.cssText =
        "position:absolute;inset:0;pointer-events:none;";
      wrap.appendChild(renderer.domElement);

      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = home[i * 2];
        positions[i * 3 + 1] = home[i * 2 + 1];
        colors[i * 3] = baseColor[i * 3];
        colors[i * 3 + 1] = baseColor[i * 3 + 1];
        colors[i * 3 + 2] = baseColor[i * 3 + 2];
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 1.7,
        sizeAttenuation: false,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      });
      scene.add(new THREE.Points(geometry, material));

      // --- Cursor state: position lerps, radius tweens on enter/leave -----
      const state = { x: -9999, y: -9999, tx: -9999, ty: -9999, r: 0 };
      const maxR = W * 0.3;

      const toLocal = (e) => {
        const rect = wrap.getBoundingClientRect();
        return {
          x: e.clientX - rect.left - W / 2,
          y: H / 2 - (e.clientY - rect.top),
        };
      };
      const onMove = (e) => {
        const p = toLocal(e);
        state.tx = p.x;
        state.ty = p.y;
      };
      const onEnter = (e) => {
        const p = toLocal(e);
        state.x = state.tx = p.x;
        state.y = state.ty = p.y;
        gsap.to(state, { r: maxR, duration: 0.7, ease: "power3.out" });
      };
      const onLeave = () => {
        gsap.to(state, { r: 0, duration: 0.6, ease: "power3.in" });
      };
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerenter", onEnter);
      wrap.addEventListener("pointerleave", onLeave);

      const pos = geometry.attributes.position.array;
      const col = geometry.attributes.color.array;

      const tick = (ms) => {
        const t = ms * 0.001;
        state.x += (state.tx - state.x) * 0.14;
        state.y += (state.ty - state.y) * 0.14;

        for (let i = 0; i < count; i++) {
          const s = seeds[i];
          const hx = home[i * 2] + Math.sin(t * (0.5 + s) + s * 40) * 2.2;
          const hy = home[i * 2 + 1] + Math.cos(t * (0.4 + s) + s * 60) * 2.2;

          let tx = hx;
          let ty = hy;
          let fade = 1;

          const dx = hx - state.x;
          const dy = hy - state.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < state.r && state.r > 1) {
            const f = 1 - d / state.r;
            const push = f * f * state.r * (0.5 + s * 0.7);
            const inv = 1 / (d + 0.001);
            tx = hx + dx * inv * push;
            ty = hy + dy * inv * push;
            fade = Math.max(0, 1 - f * 1.6);
          }

          pos[i * 3] += (tx - pos[i * 3]) * 0.12;
          pos[i * 3 + 1] += (ty - pos[i * 3 + 1]) * 0.12;
          col[i * 3] = baseColor[i * 3] * fade;
          col[i * 3 + 1] = baseColor[i * 3 + 1] * fade;
          col[i * 3 + 2] = baseColor[i * 3 + 2] * fade;
        }
        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;

        // Photo fades in through a soft mask matching the cleared dust.
        const cx = state.x + W / 2;
        const cy = H / 2 - state.y;
        const mask = `radial-gradient(circle ${state.r}px at ${cx}px ${cy}px, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 92%)`;
        imgEl.style.webkitMaskImage = mask;
        imgEl.style.maskImage = mask;

        renderer.render(scene, camera);
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(rafId);
        wrap.removeEventListener("pointermove", onMove);
        wrap.removeEventListener("pointerenter", onEnter);
        wrap.removeEventListener("pointerleave", onLeave);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    return () => {
      disposed = true;
      cleanup();
    };
  }, [src]);

  return (
    <div
      ref={wrapRef}
      className={`relative aspect-[800/950] w-full select-none overflow-hidden ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          maskImage:
            "radial-gradient(circle 0px at -100px -100px, #000, transparent)",
          WebkitMaskImage:
            "radial-gradient(circle 0px at -100px -100px, #000, transparent)",
        }}
      />
    </div>
  );
}

export default DustPortrait;
