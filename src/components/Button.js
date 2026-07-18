import React from "react";
import Link from "next/link";

const SIZES = {
  md: "px-8 py-4 text-sm uppercase tracking-[0.15em]",
  sm: "px-6 py-2.5 text-base",
};

// Canonical CTA: white pill, accent arrow. Keep every call-to-action on
// this component so the style stays consistent site-wide.
function Button({ children, className = "", href, size = "md", arrow = true }) {
  return (
    <Link
      className={`group inline-flex items-center gap-2.5 rounded-full bg-white font-semibold text-primary no-underline transition-transform duration-300 hover:scale-105 ${SIZES[size]} ${className}`}
      href={href}
    >
      {children}
      {arrow && (
        <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      )}
    </Link>
  );
}

export default Button;
