import React from "react";
import styles from "@/styles/main.module.css";
import Link from "next/link";

function Button({ children, className, href }) {
  return (
    <Link
      className={`block ${className} px-8 py-3 rounded-xl text-white no-underline hover:scale-105 transition duration-200 hover:shadow-ctaShadow hover:drop-shadow-ctaTextShadow`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default Button;
