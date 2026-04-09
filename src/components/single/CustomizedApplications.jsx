import Hero from "../shared/Hero";
import Image from "next/image";

const CustomizedApplications = () => {
  return (
    <>
      <section>
        <Hero
          title="Let's Build a Custom AI Solution with DJINN!"
          description="Need Something Unique?"
          imageLink="/images/customized-applications/customized-applications-hero.jpg"
          videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Customized+Applications+Hero+section.mp4"
          ctaText="Get Started"
          ctaLink="/get-started"
          btnDark={true}
        />
      </section>

      <section>
        <div className="container">
          <div className="opportunities">
            <h2 className="opportunities__title">
              Sometimes off-the-shelf solutions don't quite fit.
              <span className="inline-icon">
                <Image
                  src="/images/customized-applications/icons/puzzle.png"
                  alt="CloudMojo Tech Logo"
                  width={40}
                  height={40}
                />
              </span>
              If you have specific data
              <span className="inline-icon">
                <Image
                  src="/images/customized-applications/icons/data.png"
                  alt="DJINN Logo"
                  width={40}
                  height={40}
                />
              </span>
              challenges or unique
              <span className="inline-icon">
                <Image
                  src="/images/customized-applications/icons/Unique.png"
                  alt="AI Logo"
                  width={40}
                  height={40}
                />
              </span>
              business needs, DJINN offers the flexibility
              <span className="inline-icon">
                <Image
                  src="/images/customized-applications/icons/Flexible.png"
                  alt="Data Logo"
                  width={40}
                  height={40}
                />
              </span>
              to develop
              <span className="inline-icon">
                <Image
                  src="/images/customized-applications/icons/Develope.png"
                  alt="Insights Logo"
                  width={40}
                  height={40}
                />
              </span>
              bespoke AI models tailored precisely to your requirements. Leverage our powerful platform and expert team to create a custom
              <span className="inline-icon">
                <Image
                  src="/images/customized-applications/icons/Custom.png"
                  alt="Decisions Logo"
                  width={40}
                  height={40}
                />
              </span>
              AI solution that gives you a distinct advantage.
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="kind-of-custom">
            <div className="container">
                <div className="kind-of-custom-head">
                    <h2 className="common-title text-center gradient-text !mb-3"> What Kind of Custom Applications Can We Build? </h2>
                    <p> DJINN's versatile architecture and our team's expertise allow for a wide range of customized applications. Here are a few examples of how we can tailor AI to your specific needs </p>
                </div>
                <ul>
                    <li>
                        <Image src="/images/customized-applications/icons/Unique.png" alt="Unique Icon" width={48} height={48} />
                        <p>Have a unique data processing challenge within your industry? We can develop AI models to automate specific tasks, extract niche insights, or integrate with your existing systems.</p>
                    </li>
                    <li>
                        <Image src="/images/customized-applications/icons/Custom.png" alt="Custom Icon" width={48} height={48} />
                        <p>Have a unique data processing challenge within your industry? We can develop AI models to automate specific tasks, extract niche insights, or integrate with your existing systems.</p>
                    </li>
                    <li>
                        <Image src="/images/customized-applications/icons/Puzzle.png" alt="Puzzle Icon" width={48} height={48} />
                        <p>Have a unique data processing challenge within your industry? We can develop AI models to automate specific tasks, extract niche insights, or integrate with your existing systems.</p>
                    </li>
                </ul>
            </div>
        </div>
      </section>

    </>
  )
}

export default CustomizedApplications
