import React from "react";
import Hero from "../shared/Hero";
import Image from "next/image";
import WhyDjinn from "../svgs/home/WhyDjinn";

const Home = () => {
  return (
    <>
      <section>
        <Hero
          title="DJINN Can Help You Find the Shore!"
          description="Drowning in Unstructured Data?"
          imageLink="/images/home/home-hero-image.jpg"
          videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Landing+Page+Hero+scetion.mp4"
          ctaText="Get Started"
          ctaLink="/get-started"
        />
      </section>

      <section>
        <div className="container">
          <div className="opportunities">
            <h2 className="opportunities__title">
              Brought to you by the innovators at
              <span className="inline-icon">
                <Image
                  src="/images/home/icons/CloudMojo.svg"
                  alt="CloudMojo Tech Logo"
                  width={40}
                  height={40}
                />
              </span>
              CloudMojo Tech, DJINN
              <span className="inline-icon">
                <Image
                  src="/images/home/icons/DJINN.svg"
                  alt="DJINN Logo"
                  width={40}
                  height={40}
                />
              </span>
              is the smart AI
              <span className="inline-icon">
                <Image
                  src="/images/home/icons/Solution.svg"
                  alt="AI Logo"
                  width={40}
                  height={40}
                />
              </span>
              that learns from your complex data
              <span className="inline-icon">
                <Image
                  src="/images/home/icons/Unstructured.svg"
                  alt="Data Logo"
                  width={40}
                  height={40}
                />
              </span>
              – documents, images, audio, and more – to deliver clear
              <span className="inline-icon">
                <Image
                  src="/images/home/icons/Aim.svg"
                  alt="Insights Logo"
                  width={40}
                  height={40}
                />
              </span>
              , actionable insights. Empower your business and enterprise with
              the intelligence to make smarter decisions
              <span className="inline-icon">
                <Image
                  src="/images/home/icons/Unique.svg"
                  alt="Decisions Logo"
                  width={40}
                  height={40}
                />
              </span>
              and unlock significant opportunities.
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="why-djinn">
            <div className="why-djinn-wrapper">
              <h2 className="why-djinn__title">Why DJINN?</h2>
              <p className="why-djinn__description">
                DJINN isn’t just another AI tool—it’s a purpose-built platform
                designed to make sense of complex, unstructured data in the real
                world. Here’s why businesses choose DJINN:
              </p>
            </div>
            <div className="why-djinn-features">
              <ul>
                <li>
                  <Image
                    src="/images/home/icons/Built for Unstructured Data.svg"
                    alt="Unique Logo"
                    width={42}
                    height={42}
                  />
                  <h2>Built for Unstructured Data</h2>
                  <p>
                    DJINN is engineered to process documents, images, videos,
                    and audio files transforming messy data into clear,
                    actionable insights.
                  </p>
                </li>
                <li>
                  <Image
                    src="/images/home/icons/Custom-Fit AI.svg"
                    alt="Unique Logo"
                    width={42}
                    height={42}
                  />
                  <h2>Custom-Fit AI</h2>
                  <p>
                    No two businesses are the same. DJINN adapts to your unique
                    workflows, goals, and industry needs with tailored AI models
                  </p>
                </li>
                <li>
                  <Image
                    src="/images/home/icons/Enterprise-Ready Performance.svg"
                    alt="Unique Logo"
                    width={42}
                    height={42}
                  />
                  <h2>Enterprise-Ready Performance</h2>
                  <p>
                    From small projects to large-scale deployments, DJINN is
                    secure, scalable, and optimized for high performance.
                  </p>
                </li>
                <li>
                  <Image
                    src="/images/home/icons/Human-Centric Design.svg"
                    alt="Unique Logo"
                    width={42}
                    height={42}
                  />
                  <h2>Human-Centric Design</h2>
                  <p>
                    Intuitive interfaces and transparent outputs make DJINN easy
                    to use—so your team can focus on action, not algorithms.
                  </p>
                </li>
              </ul>

              <div className="why-djinn-bg-animation">
                <WhyDjinn />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="key-features">
              <h2>Key Features</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
