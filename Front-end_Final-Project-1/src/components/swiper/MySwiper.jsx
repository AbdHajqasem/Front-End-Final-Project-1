import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect,useState } from 'react';
import 'swiper/css';
import HandpickedCard from '../handpickedcard/HandpickedCard';

const MySwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1162) {
        setSlidesPerView(4);
      } else if (width >= 800) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <HandpickedCard></HandpickedCard>
      </SwiperSlide>
      <SwiperSlide>  <HandpickedCard></HandpickedCard></SwiperSlide>
      <SwiperSlide>  <HandpickedCard></HandpickedCard></SwiperSlide>
      <SwiperSlide>  <HandpickedCard></HandpickedCard></SwiperSlide>
      <SwiperSlide>  <HandpickedCard></HandpickedCard></SwiperSlide>
      <SwiperSlide>  <HandpickedCard></HandpickedCard></SwiperSlide>
      <SwiperSlide>  <HandpickedCard></HandpickedCard></SwiperSlide>
    </Swiper>
  );
};
export default MySwiper