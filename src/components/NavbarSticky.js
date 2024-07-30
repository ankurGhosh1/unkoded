import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Button from "@/components/Button";

const NavbarSticky = ({ sticky }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${sticky ? "sticky !mt-0" : "relative -mt-[80px]"} flex items-center top-0 text-white p-4 h-20 backdrop-filter backdrop-blur-md shadow-custom z-10`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link href="/" className="text-xl font-bold text-white">
              {/* <Image
                src="/logo.png"
                alt="Logo"
                className="w-24 h-auto"
                height={30}
                width={30}
              /> */}
              Unkoded
            </Link>
          </div>
          <div className="max-md:hidden flex gap-8 items-center">
            {/* Menu for larger screens */}
            <Link href="/" className="text-lg">
              Home
            </Link>
            <Link href="/about" className="text-lg">
              About
            </Link>
            <Link href="/blog" className="text-lg">
              Blog
            </Link>
            <Button
              className="bg-gradient-to-r from-optional to-secondary text-lg"
              href="/contact"
            >
              Contact
            </Button>
          </div>
          <div className="hidden max-md:flex">
            {/* Hamburger Icon */}
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="space-y-2 mt-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavbarSticky;
