import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Scroll-triggered reveal wrapper.
 * Wrap any block; it fades/slides in when it enters the viewport.
 * Pass `stagger` to animate direct children one after another.
 */
function Reveal({
  children,
  className = "",
  delay = 0,
  y = 48,
  duration = 0.9,
  stagger = 0,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const targets = stagger > 0 ? ref.current.children : ref.current;
      gsap.from(targets, {
        y,
        opacity: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        // Fail-open: don't pre-hide content. If the trigger never fires
        // (stale positions after hot reload / late layout shifts), the
        // section stays visible instead of being stuck at opacity 0.
        immediateRender: false,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default Reveal;
