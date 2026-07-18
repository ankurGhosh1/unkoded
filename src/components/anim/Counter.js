import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Counts from 0 up to `to` when scrolled into view, e.g. <Counter to={150} suffix="+" />
 */
function Counter({ to, prefix = "", suffix = "", duration = 2, className = "" }) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${to}`;
      return;
    }

    const state = { value: 0 };
    gsap.to(state, {
      value: to,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${Math.round(state.value)}`;
      },
    });
  }, []);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref}>0</span>
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  );
}

export default Counter;
