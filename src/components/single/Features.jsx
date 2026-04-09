import Hero from "../shared/Hero";
import VideoPlay from "../shared/VideoPlay";
import { AdvancedAIAnalysis, IndustrySpecificTools } from "@/app/data";

const Features = () => {
  return (
    <>
      <section>
        <Hero
          title="Insight, Unleashed"
          titleHighlight="DJINN is designed to make working with unstructured data easy and impactful. Here’s what’s under the hood."
          description="Ready to unlock insights?"
          imageLink="/images/features/bulb-video.png"
          videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Features+Hero+Section.mp4"
          ctaText="Get Started"
          ctaLink="/get-started"
          btnDark={true}
        />
      </section>

      <section>
        <div className="core-data">
          <div className="container">
            <h2 className="common-title text-center gradient-text !mb-3">
              Core Data Processing
            </h2>
            <p className="text-center">Web App Coming Soon by April 2026</p>
          </div>

          <div className="slider-section my-15">
            <div className="countinous-left">
              <ul>
                <li>
                  <div className="card"></div>
                </li>
                <li>
                  <div className="card"></div>
                </li>
                <li>
                  <div className="card">
                    <VideoPlay videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Core+Data+_+2+Data+Extraction.mp4" />
                    <div className="content-sec">
                      <h3>Data Extraction & Organization</h3>
                      <p>
                        Automatically pull out key data from various files—no
                        more manual sorting.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card"></div>
                </li>
                <li>
                  <div className="card">
                    <VideoPlay videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Core+Data+_+4+Computer+Vision.mp4" />
                    <div className="content-sec">
                      <h3>Computer Vision & OCR</h3>
                      <p>
                        Scan images, PDFs, and documents to find and extract
                        useful information.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card"></div>
                </li>
                <li>
                  <div className="card"></div>
                </li>
              </ul>
            </div>
            <div className="countinous-right">
              <ul>
                <li>
                  <div className="card"></div>
                </li>
                <li>
                  <div className="card">
                    <VideoPlay videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Core+Data+_+1+Handwritten+Text+Recognition.mp4" />
                    <div className="content-sec">
                      <h3>Handwritten Text Recognition</h3>
                      <p>
                         Read and analyze handwritten notes, even if they’re
                        messy..
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card"></div>
                </li>
                <li>
                  <div className="card">
                    <VideoPlay videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Core+Data+_+3+Natural+Language+Processing.mp4" />
                    <div className="content-sec">
                      <h3>Natural Language Processing</h3>
                      <p>
                        Understand the true meaning behind text, from emails to
                        reports.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card"></div>
                </li>
                <li>
                  <div className="card"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="advanced-ai">
          <div className="container">
            <div className="advance-heading">
              <h2 className="common-title text-center gradient-text !mb-3">
                {" "}
                Advanced AI Analysis{" "}
              </h2>
              <p className="text-center">
                Advance Features Coming Soon by August 2026
              </p>
            </div>
            <div className="ai-cards-sec">
              <ul>
                {AdvancedAIAnalysis.map((item, index) => (
                  <li key={index}>
                    <div className="card">
                      <VideoPlay videoLink={item.videoLink} />
                      <div className="content-sec">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="industry-specific-tools">
          <div className="container">
            <div className="mb-10">
              <h2 className="common-title text-center gradient-text !mb-1"> Industry-Specific Tools </h2>
              <p className="text-center"> Special Applications Coming Soon by February 2026 </p>
            </div>
            <div className="industry-specific-tools-cards">
              <ul>
                {IndustrySpecificTools.map((item, index) => (
                  <li key={index}>
                    <div className="">
                      <img src={item.imageUrl} alt={item.title} />
                      <div className="content-sec">
                        <h3 className="gradient-text">{item.title}</h3>
                        <ul>
                          {item.description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
