import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#121212] pt-16 mt-auto overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-8 max-w-[1100px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12 md:gap-0">
          {/* Left Column */}
          <div className="max-w-md">
            <h3 className="text-white text-2xl md:text-[26px] italic font-medium mb-6 leading-tight">
              Unlocking insights from unstructured data.
            </h3>
            <p className="text-gray-400 text-[15px] md:text-base leading-relaxed mb-8 pr-4">
              We're eager to hear from you! Whether you have questions about
              DJINN, want to explore custom AI solutions, or just want to
              connect, please -{" "}
              <Link
                href="/contact"
                className="underline text-gray-300 hover:text-white transition-colors"
              >
                Get In Touch.
              </Link>
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="#linkedin"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]"
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#instagram"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-gray-400 hover:border-pink-500 hover:text-pink-500 transition-all duration-300 hover:shadow-[0_0_12px_rgba(236,72,153,0.5)]"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#facebook"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-[0_0_12px_rgba(37,99,235,0.5)]"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="#x"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all duration-300 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column (Navigation) */}
          <div className="flex flex-col items-start md:items-end gap-[13px] text-[15px]">
            {[
              "Home",
              "Features",
              "Customized Applications",
              "Resources",
              "About Us",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className={`transition-colors relative pb-[2px] ${
                  item === "Home"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#79DCF3] to-[#0042BC] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#79DCF3] after:to-[#0042BC]"
                    : "text-gray-400 hover:text-white font-light hover:underline underline-offset-4 decoration-gray-500"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mb-8" />

        {/* Middle Section (Info & Copyright) */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[13px] md:text-sm text-gray-400 gap-4 md:gap-0 lg:px-4 relative z-10">
          <p>
            Product of{" "}
            <span className="text-gray-200 font-medium">CloudMojo!</span>
          </p>
          <p>
            This website uses{" "}
            <span className="text-gray-200 font-medium">cookies.</span>
          </p>
          <p>
            All Rights Reserved ©{" "}
            <span className="text-gray-200 font-medium">2026</span>
          </p>
        </div>
      </div>

      {/* Bottom Huge DJINN TEXT */}
      <div
        className="w-full flex justify-center items-end mt-4 mb-[-5%] overflow-hidden relative z-0"
        style={{ height: "clamp(100px, 18vw, 300px)" }}
      >
        <h1
          className="text-center font-black leading-none m-0"
          style={{
            fontSize: "clamp(120px, 22vw, 400px)",
            letterSpacing: "-0.015em",
            lineHeight: "0.8",
            background: "linear-gradient(180deg, #79DCF3 10%, #0042BC 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            opacity: 0.95,
          }}
        >
          DJINN.AI
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
