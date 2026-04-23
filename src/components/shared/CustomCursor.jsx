"use client";

import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY + 25 });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseEnterLink = () => setIsHovering(true);
    const handleMouseLeaveLink = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Initial check for interactive elements
    const updateInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, .glowing-btn, .hamburger-menu, .back-to-top");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterLink);
        el.addEventListener("mouseleave", handleMouseLeaveLink);
      });
    };

    updateInteractiveListeners();

    // Re-check periodically if elements are added dynamically
    const interval = setInterval(updateInteractiveListeners, 2000);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearInterval(interval);

      const interactiveElements = document.querySelectorAll("a, button, .glowing-btn, .hamburger-menu, .back-to-top");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterLink);
        el.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, [isVisible]);

  // Disable on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div
      className={`custom-cursor-wrapper ${isVisible ? "visible" : ""} ${isClicked ? "clicked" : ""} ${isHovering ? "hovering" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-main">
        <img src="/images/cursor.svg" alt="cursor" />
        <div className="cursor-sparks">
          <div className="spark" style={{ "--i": 0 }}></div>
          <div className="spark" style={{ "--i": 1 }}></div>
          <div className="spark" style={{ "--i": 2 }}></div>
          <div className="spark" style={{ "--i": 3 }}></div>
          <div className="spark" style={{ "--i": 4 }}></div>
          <div className="spark" style={{ "--i": 5 }}></div>
        </div>
      </div>
      <div className="cursor-ripple"></div>
    </div>
  );
};

export default CustomCursor;
