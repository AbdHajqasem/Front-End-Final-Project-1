import './brands.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BrandsCard from '../barndscard/BrandsCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Brands = (prop) => {


  return (
    <div className="brands-container">
      <p className="brands-title">Shop by Brands</p>
      <Swiper
        className="brands-swiper"
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
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {prop.brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <BrandsCard barndname={brand.name} brandLogo={brand.logo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
