import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarSticky from "./NavbarSticky";
import Footer from "./Footer";

function Layout({ children, className }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.3; // 30% of viewport height
      setIsSticky(scrollTop > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative ${className} `}>
      <NavbarSticky sticky={isSticky}></NavbarSticky>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
