import React from "react";
import SliderComponent from "../slider/SliderComponent";

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/THPjposu8zw",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/LlynfPrljvU",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/LlynfPrljvU",
  },
];

const VideoSlider = () => {
  return (
    <SliderComponent>
      {videos.map((video) => (
        <div key={video.id}>
          <iframe
            title={`video-${video.id}`}
            width="560"
            height="315"
            src={video.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      ))}
    </SliderComponent>
  );
};

export default VideoSlider;
