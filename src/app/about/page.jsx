import Hero from "@/components/shared/Hero";
import OurMission from "@/components/svgs/about/OurMission";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <>
      <section>
        <Hero
          title="Innovation in Data Intelligence"
          description="Need Something Unique?"
          imageLink="/images/about/about-hero-image.png"
          videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Contact+Us+HEro+Section.mp4"
          ctaText="Get Started"
          ctaLink="/get-started"
        />
      </section>

      <section>
        <div className="container">
          <div className="driven-innovation">
            <div className="driven-head">
              <h2>
                {" "}
                Driven by <span className="gradient-text">Innovation, </span>
              </h2>
              <h2>
                Focused on Your <span className="gradient-text">Success. </span>
              </h2>

              <p>
                CloudMojo Tech
                <Image
                  src="/images/about/CloudMojo.png"
                  alt="CloudMojo Tech Logo"
                  width={40}
                  height={40}
                />
                was established five years ago with a clear aim
                <Image
                  src="/images/about/Aim.png"
                  alt="Aim"
                  width={40}
                  height={40}
                />
                :
              </p>

              <p className="!mb-15">
                To provide businesses and organizations with advanced technology
                that simplifies complex data
                <Image
                  src="/images/about/data.png"
                  alt="data"
                  width={40}
                  height={40}
                />
                challenges. Recognizing the increasing volume and untapped value
                within unstructured
                <Image
                  src="/images/about/Unstructured.png"
                  alt="Unstructured"
                  width={40}
                  height={40}
                />
                data, we set out to create a solution
                <Image
                  src="/images/about/data.png"
                  alt="data"
                  width={40}
                  height={40}
                />
                that could make this potential accessible.
              </p>

              <p>
                DJINN is the result of that ambition
                <Image
                  src="/images/about/Ambition.png"
                  alt="data"
                  width={40}
                  height={40}
                />
                – a powerful yet user-friendly AI platform designed to transform
                how you understand and utilize your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="our-mission-section">
          <div className="our-mission-wrapper">
            <div className="our-mission">
              <div className="container">
                <h2 className="!mb-8">
                  Our <span className="gradient-text ">Mission</span>
                </h2>
                <p>
                  Our goal is to offer innovative and intelligent tools that
                  enable our users to gain deeper understanding from their data,
                  make better-informed decisions, and ultimately foster progress
                  within their organizations and beyond. We are dedicated to
                  building accessible solutions that harness the power of AI to
                  address real-world problems
                </p>
              </div>
            </div>
            <OurMission />
          </div>
        </div>
      </section>



      <section>
        <div className="container">
          <div className="our-values">
            <h2 className="common-title text-center gradient-text !mb-20">The Problem Djinn Solves </h2>
            <ul>
              <li>
                <Image src="/images/about/icons/i90.svg" alt="i90" width={286} height={179} />
              </li>
              <li>
                <Image src="/images/about/icons/₹265-trillion.svg" alt="265 trillion" width={286} height={179} />
              </li>
              <li>
                <Image src="/images/about/icons/5-6.svg" alt="5-6%" width={286} height={179} />
              </li>
              <li>
                <Image src="/images/about/icons/80.svg" alt="80%" width={286} height={179} />
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="why-djinn-smarter">
            <div className="why-djinn-head">
              <h3 className="common-title">  Why DJINN? </h3>
              <h2 className="common-title gradient-text"> Smarter Data Processing, Made Simple. </h2>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default AboutUsPage;
