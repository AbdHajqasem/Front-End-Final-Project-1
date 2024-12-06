import { Swiper, SwiperSlide } from "swiper/react";
import { useState,useEffect } from "react";
import "swiper/css";
import "./handpicks.css";
import HandpickedCard from "../handpickedcard/HandpickedCard";
import axios from "axios";

const HandPicks = () => {

  const [handPicks, setHandPicks] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token')?.replace(/^"|"$/g, '');

  useEffect(() => {
    const fetchHandPicks = async () => {
      try {
        const response = await axios.get('https://backend-final-1-1-bkpd.onrender.com/api/products/handpicked', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);
        setHandPicks(response.data);
      } catch (err) {
        console.log(err);
        
        setError(err.message);
      }
    };

    fetchHandPicks();
  }, []);

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
      >
        <SwiperSlide>
          <HandpickedCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HandPicks;
