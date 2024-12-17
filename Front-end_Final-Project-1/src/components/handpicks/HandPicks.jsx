import { Swiper, SwiperSlide } from "swiper/react";
import { useState,useEffect } from "react";
import "swiper/css";
import "./handpicks.css";
import HandpickedCard from "../handpickedcard/HandpickedCard";

const HandPicks = (prop) => {

  return (
    <div className="handpick-container">
      <p className="handpick-title">Handpicked</p>

      <Swiper
        className="custom-swiper"
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          930: {
            slidesPerView: 3,
          },
          580: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <HandpickedCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HandPicks;
