"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Hero = ({
  title,
  titleHighlight,
  description,
  ctaText,
  ctaLink,
  videoLink,
  imageLink,
  btnDark,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current?.readyState >= 3) {
      setVideoLoaded(true);
    }
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    videoRef.current?.play().catch((error) => {
      console.error("Autoplay was prevented:", error);
    });
  };

  return (
    <div className="hero-section">
      <div className="video-container">
        <Image
          src={imageLink}
          alt="Hero Placeholder"
          fill
          priority
          style={{
            objectFit: "cover",
            display: videoLoaded ? "none" : "block",
            transition: "opacity 0.3s ease-out",
            zIndex: 1,
          }}
        />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoaded}
          className="background-video"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 0.8s ease-in",
          }}
        >
          <source src={videoLink} type="video/mp4" />
        </video>
      </div>

      <div className="hero-content">
        <div>
          <p className="hero-description">{description}</p>
          <a href={ctaLink} className={`glowing-btn ${btnDark ? "glowing-btn" : "white-btn"}`}>
            {ctaText}
          </a>
        </div>
        <div>
          <h1 className="hero-title">{title}</h1>
          {titleHighlight && (
            <p className="hero-title-highlight">{titleHighlight}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
