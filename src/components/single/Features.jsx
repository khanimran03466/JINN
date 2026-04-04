import Hero from "../shared/Hero";


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
    </>
  );
};

export default Features;
