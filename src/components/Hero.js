import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import LiquidText from "@/components/anim/LiquidText";

gsap.registerPlugin(useGSAP);

function Hero() {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 24, opacity: 0, duration: 0.6 })
        .from(
          ".hero-title-line",
          { y: 70, opacity: 0, duration: 0.9, stagger: 0.15 },
          "-=0.3"
        )
        .from(".hero-cta", { y: 24, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(".hero-word", { y: 120, opacity: 0, duration: 1.1 }, "-=0.4");
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] flex-col overflow-hidden bg-primary text-white"
    >
      {/* Subtle blueprint grid backdrop */}
      <div className="grid-bg absolute inset-0 -z-10" />

      <Container>
        <div className="flex flex-col items-start gap-8 pt-20 max-md:pt-14">
          <div className="hero-badge glass flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-textGray">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </div>

          <h1 className="text-4xl font-bold leading-tight max-md:text-3xl max-sm:text-2xl">
            <span className="hero-title-line block">
              Fast, Reliable &amp; Affordable<span className="text-accent">.</span>
            </span>
            <span className="hero-title-line block pb-1 text-textGray">
              Because your Figma deserves better.
            </span>
          </h1>

          <span className="hero-cta">
            <Button href="/contact">Book a Call</Button>
          </span>
        </div>
      </Container>

      {/* Giant word — hover to reveal the image through the letters */}
      <div className="hero-word mt-auto w-full px-3 pb-6 pt-16 max-md:pt-10">
        <LiquidText
          text="UNKODED"
          image="/hero-texture.jpg"
          dot="#ff4133"
          className="text-white"
        />
      </div>
    </section>
  );
}

export default Hero;
