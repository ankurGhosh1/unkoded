import React from "react";

/**
 * Infinite horizontal marquee. Content is rendered twice and the track
 * translates -50%, so the loop is seamless. Pauses on hover.
 */
function Marquee({ items, className = "" }) {
  const row = (ariaHidden) => (
    <div
      className="flex shrink-0 items-center gap-12 pr-12 animate-marquee"
      aria-hidden={ariaHidden}
    >
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-12 text-lg font-semibold uppercase tracking-widest text-textGray whitespace-nowrap"
        >
          {item}
          <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee-track flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)] ${className}`}
    >
      {row(false)}
      {row(true)}
    </div>
  );
}

export default Marquee;
