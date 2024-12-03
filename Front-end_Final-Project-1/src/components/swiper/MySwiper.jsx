import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./myswiper.css";
import HandpickedCard from "../handpickedcard/HandpickedCard";

const MySwiper = () => {
  return (
    <div className="handpick-container">
      <p className="handpick-title">Handpicked Collections</p>

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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <HandpickedCard />
        </SwiperSlide>
        <SwiperSlide>
          <HandpickedCard />
        </SwiperSlide>
        <SwiperSlide>
          <HandpickedCard />
        </SwiperSlide>
        <SwiperSlide>
          <HandpickedCard />
        </SwiperSlide>
        <SwiperSlide>
          <HandpickedCard />
        </SwiperSlide>
        <SwiperSlide>
          <HandpickedCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
