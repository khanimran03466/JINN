import React from "react";
import Hero from "../shared/Hero";
import Image from "next/image";
import WhyDjinn from "../svgs/home/WhyDjinn";
import VideoPlay from "../shared/VideoPlay";
import { HomeKeyFeatures, HomeCloserLookData } from "@/app/data";
import Link from "next/link";
import FlipCardsClient from "./FlipCardsClient";

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
                DJINN isn't just another AI tool—it's a purpose-built platform
                designed to make sense of complex, unstructured data in the real
                world. Here's why businesses choose DJINN:
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
            <h2 className="common-title text-center gradient-text !mb-4">
              Key Features
            </h2>
            <ul>
              {HomeKeyFeatures.map((pair, index) => (
                <li key={index} className="feature-row">
                  {pair.map((feature, subIndex) => (
                    <div className="card" key={subIndex}>
                      <div className="content-wrapper">
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                      </div>
                      <VideoPlay videoLink={feature.videoLink} />
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="">
            <div className="who-its-for">
              <div className="animation-container h-screen">
                <h2 className="common-title gradient-text">Who It's For</h2>
                <h3>
                  Built for enterprises where unstructured data drives critical
                  decisions.
                </h3>
                <p>
                  Djinn is designed for industries where speed, accuracy, and
                  insight are essential. From regulated sectors to
                  data-intensive operations, Djinn helps teams extract real
                  value from the noise—whether it's buried in documents, images,
                  audio, or customer communications.
                </p>

                <FlipCardsClient />

                <div className="bottom-cont">
                  <p className="mb-8 font-[1.2rem] gradient-text">
                    Discover What DJINN Can Do For Your Business
                  </p>
                  <Link href="/discover" className="glowing-btn">
                    Discover
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="closer-look">
            <div className="closer-heading mb-12">
              <h2 className="common-title gradient-text">
                A Closer Look at{" "}
                <span>
                  {" "}
                  <Image
                    src="/images/home/small-djinn-logo.svg"
                    width={60}
                    height={34}
                    alt="DJINN Logo"
                  />
                </span>{" "}
                DJINN's Capabilities
              </h2>
            </div>

            <div className="closer-look-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {HomeCloserLookData.map((item, index) => (
                <div
                  key={index}
                  className={`relative rounded-[30px] overflow-hidden min-h-[400px] lg:min-h-[500px] flex ${item.type === "text"
                      ? "bg-[#222222] p-8 lg:p-12 flex-col justify-between"
                      : "w-full h-full"
                    }`}
                >
                  {item.type === "text" ? (
                    <>
                      <div>
                        <h3 className="text-white text-2xl lg:text-[28px] font-semibold mb-4 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-[15px] font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-8 flex items-center">
                        <div className="inline-flex items-center justify-center border border-gray-600 rounded-[50px] px-4 py-1.5 text-xs text-gray-400">
                          <span>{item.index}</span>
                          <span className="mx-2 opacity-50">|</span>
                          <span>{item.total}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={item.imageLink || "/images/home/placeholder.jpg"}
                      alt="DJINN Capability"
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
