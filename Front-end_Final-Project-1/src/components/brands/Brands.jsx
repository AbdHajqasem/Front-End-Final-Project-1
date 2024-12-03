import './brands.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BrandsCard from '../barndscard/BrandsCard';
const Barnds = () => {
  return (
    <div className='brands-container'>
    <p className="brands-title">Shop by Brands</p>
    <Swiper
      className="barnds-swiper"
      slidesPerView={4} 
      spaceBetween={10}

      breakpoints={{
        1200: {
          slidesPerView: 6, 
        },
        930: {
          slidesPerView: 5, 
        },
        750: {
          slidesPerView: 4, 
        },
        565: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
          },
        0:{
          slidesPerView: 1,
        }
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <BrandsCard></BrandsCard>
      </SwiperSlide>
      <SwiperSlide>
      <BrandsCard></BrandsCard>
      </SwiperSlide>
      <SwiperSlide>
      <BrandsCard></BrandsCard>
      </SwiperSlide>
      <SwiperSlide>
      <BrandsCard></BrandsCard>
      </SwiperSlide>
      <SwiperSlide>
      <BrandsCard></BrandsCard>
      </SwiperSlide>
      <SwiperSlide>
      <BrandsCard></BrandsCard>
      </SwiperSlide>
      <SwiperSlide>
      <BrandsCard></BrandsCard>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Barnds;
