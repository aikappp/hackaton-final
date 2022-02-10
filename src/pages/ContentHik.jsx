import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ContentHik = () => {
  SwiperCore.use([Navigation]);
  return (
    <div>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide
          style={{
            position: "relative",
            zIndex: -2,
          }}
        >
          <video src="/videos/europe.mp4" autoPlay loop muted></video>
        </SwiperSlide>
        <SwiperSlide>
            
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ContentHik;
