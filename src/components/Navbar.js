import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Button from "@/components/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center p-4 text-white">
      <Container>
        <div className="flex h-12 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            Unkoded<span className="text-accent">.</span>
          </Link>

          <div className="flex items-center gap-8 max-md:hidden">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link text-lg">
                {link.label}
              </Link>
            ))}
            <Button href="/contact" size="sm">
              Contact
            </Button>
          </div>

          <div className="hidden max-md:flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-lg text-textGray hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-lg text-textGray hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
