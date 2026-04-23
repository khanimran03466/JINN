"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/logo/djinn-logo.svg"
                  alt="logo"
                  width={210}
                  height={27}
                />
              </Link>
            </div>

            <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link href="/features" onClick={() => setIsMenuOpen(false)}>Features</Link>
                </li>
                <li>
                  <Link href="/customized-applications" onClick={() => setIsMenuOpen(false)}>
                    Customized Applications
                  </Link>
                </li>
                <li>
                  <Link href="/resources" onClick={() => setIsMenuOpen(false)}>Resources</Link>
                </li>
                <li>
                  <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                </li>
                <li>
                  <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </li>
                <li className="mobile-only-btn">
                  <Link href="/get-started" className="glowing-btn" onClick={() => setIsMenuOpen(false)}>
                    Free Demo
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="header-right">
            <Link href="/get-started" className="glowing-btn desktop-only-btn">
              Free Demo
            </Link>
            
            <button className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
              <div className="hamburger-box">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
