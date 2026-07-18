import React from "react";
import dynamic from "next/dynamic";
import Heading2 from "@/components/Heading2";
import Counter from "@/components/anim/Counter";
import Reveal from "@/components/anim/Reveal";

const ParticleField = dynamic(() => import("@/components/anim/ParticleField"), {
  ssr: false,
});

const STATS = [
  { to: 150, suffix: "+", label: "Projects delivered" },
  { to: 6, suffix: "+", label: "Years of experience" },
  { to: 98, suffix: "%", label: "Client satisfaction" },
  { to: 2, suffix: "x", label: "Avg. conversion lift" },
];

function Stats() {
  return (
    <div className="relative w-full overflow-hidden py-24">
      {/* Living backdrop: undulating particle wave (three.js) */}
      <ParticleField className="absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_30%,#222_100%)]" />

      <div className="relative mx-auto max-w-[1280px] px-4">
        <Reveal>
          <Heading2 className="text-center text-white">
            Impact Metrics That Our Clients Feel
            <span className="text-accent">.</span>
          </Heading2>
        </Reveal>

        <Reveal
          stagger={0.12}
          className="mt-16 grid grid-cols-4 gap-y-14 max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative border-l border-white/10 px-8 max-sm:border-l-0 max-sm:px-2 max-sm:text-center"
            >
              <span className="absolute -left-px top-0 h-8 w-px bg-accent transition-all duration-500 group-hover:h-full max-sm:hidden" />
              <span className="text-sm font-semibold tracking-[0.25em] text-textGray">
                0{i + 1}
              </span>
              <Counter
                to={stat.to}
                suffix={stat.suffix}
                className="mt-2 block text-7xl font-extrabold text-white max-md:text-6xl"
              />
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-textGray">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}

export default Stats;
