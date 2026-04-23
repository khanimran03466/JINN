"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiArrowUp } from "react-icons/hi2";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after 300px scroll
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`floating-nav-wrapper ${isVisible ? "visible" : ""}`}>
      <div className="floating-nav-container">
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <HiArrowUp />
        </button>
        
        <nav className="floating-links">
          <ul>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/customized-applications">Customized Application</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>

        <div className="floating-cta">
          <Link href="/get-started" className="glowing-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;
