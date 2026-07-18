import React from "react";
import Link from "next/link";
import Container from "./Container";

const SOCIALS = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const LINK_GROUPS = [
  {
    heading: "Services",
    links: ["Web Development", "UI/UX Design", "E-commerce", "SEO Optimization"],
  },
  {
    heading: "Quick Links",
    links: ["About Us", "Our Projects", "Testimonials", "Contact"],
  },
];

function Footer() {
  return (
    <footer className="fixed bottom-0 -z-10 flex h-96 w-full items-center justify-center bg-footer p-8 text-textGray">
      <Container>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              Unkoded<span className="text-accent">.</span>
            </Link>
            <p className="mt-2 text-sm">
              Crafting solutions for tomorrow&apos;s challenges.
            </p>
            <ul className="mt-4 flex space-x-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="glass flex h-10 w-10 items-center justify-center rounded-full text-textGray transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-glow"
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="font-bold text-white">{group.heading}</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {group.links.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="transition-colors duration-200 hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-white">Contact</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>123 Business Rd.</li>
              <li>Business City, 54321</li>
              <li>
                <a
                  href="mailto:ankurghosh42@gmail.com"
                  className="transition-colors duration-200 hover:text-white"
                >
                  ankurghosh42@gmail.com
                </a>
              </li>
              <li>+1 234 567 8900</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
