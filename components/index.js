import React from "react";

const index = () => {
  return (
    <div>
      <video
        autoPlay="autoplay"
        loop
        muted
        playsInline
        poster="https://noccoffeeco.com/media/2019/03/home_gough.jpg"
        className="home-vid__vid"
      >
        <source
          src="https://noccoffeeco.com/media/2019/03/home_gough.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default index;
