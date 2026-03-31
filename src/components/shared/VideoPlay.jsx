import React from "react";

const VideoPlay = ({ videoLink }) => {
  return (
    <>
      <video width="100%" height="auto" loop autoPlay muted>
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default VideoPlay;
