import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
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

            <nav>
              <ul>
                <li>
                  {" "}
                  <Link href="/features">Features</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/customized-applications">
                    {" "}
                    Customized Applications{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/resources">Resources</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/about-us">About Us</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/contact-us">Contact Us</Link>{" "}
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <Link href="/get-started" className="glowing-btn">
              Free Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
