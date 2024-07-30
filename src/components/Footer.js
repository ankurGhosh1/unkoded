import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
// import { Plus_Jakarta_Sans } from "next/font/google";

// const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

function Footer() {
  return (
    <footer className="flex items-center justify-center bg-footer text-textGray p-8 h-96 w-full fixed -z-10 bottom-0">
      <Container>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          <div>
            <Link
              href="/"
              className={`text-xl font-bold text-white`} //${jakarta.className}
            >
              {/* <Image
                src="/logo.png"
                alt="Logo"
                className="w-24 h-auto"
                height={30}
                width={30}
              /> */}
              Unkoded
            </Link>
            <p className="mt-2 text-sm">
              Crafting solutions for tomorrow&apos;s challenges.
            </p>
            <ul className="mt-4 flex space-x-4">
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    className="w-6 h-6"
                    height={30}
                    width={30}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    className="w-6 h-6"
                    height={30}
                    width={30}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    className="w-6 h-6"
                    height={30}
                    width={30}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Services</h3>
            <ul className="mt-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <ul className="mt-2 text-sm">
              <li>123 Business Rd.</li>
              <li>Business City, 54321</li>
              <li>ankurghosh42@gmail.com</li>
              <li>+1 234 567 8900</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
