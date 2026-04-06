import Hero from "../shared/Hero";
import VideoPlay from "../shared/VideoPlay";


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
            <h2 className="common-title text-center gradient-text !mb-3" >Core Data Processing</h2>
            <p className="text-center">Web App Coming Soon by April 2026</p>
          </div>

          <div className="slider-section mt-15">
            <div className="countinous-left">
              <ul>
                <li>
                  <div className="card">

                  </div>
                </li>
                <li>
                  <div className="card">

                  </div>
                </li>
                <li>
                  <div className="card">
                    <VideoPlay videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Core+Data+_+1+Handwritten+Text+Recognition.mp4" />
                  </div>
                </li>
                <li>
                  <div className="card">

                  </div>
                </li>
                <li>
                  <div className="card">
                    <VideoPlay videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Core+Data+_+2+Data+Extraction.mp4" />
                  </div>
                </li>
                <li>
                  <div className="card">

                  </div>
                </li>
                <li>
                  <div className="card">

                  </div>
                </li>
              </ul>
            </div>
            <div className="countinous-right">
              <ul>
                <li>
                  <div className="card">

                  </div>
                </li>
                <li>
                  <div className="card">
                    <VideoPlay videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Core+Data+_+2+Data+Extraction.mp4" />
                  </div>
                </li>
                <li>
                  <div className="card">

                  </div>
                </li>
                <li>
                  <div className="card">
                    <VideoPlay videoLink="https://cmtwebsite-video-bucket.s3.ap-south-1.amazonaws.com/Core+Data+_+3+Natural+Language+Processing.mp4" />
                  </div>
                </li>
                <li>
                  <div className="card">

                  </div>
                </li>
                <li>
                  <div className="card">

                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
