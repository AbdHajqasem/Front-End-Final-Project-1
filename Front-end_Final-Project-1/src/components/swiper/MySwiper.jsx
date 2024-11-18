import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HandpickedCard from '../handpickedcard/HandpickedCard';

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><HandpickedCard></HandpickedCard></SwiperSlide>
      <SwiperSlide><HandpickedCard></HandpickedCard></SwiperSlide>
      <SwiperSlide><HandpickedCard></HandpickedCard></SwiperSlide>
      <SwiperSlide><HandpickedCard></HandpickedCard></SwiperSlide>
    </Swiper>
  );
};
export default MySwiper