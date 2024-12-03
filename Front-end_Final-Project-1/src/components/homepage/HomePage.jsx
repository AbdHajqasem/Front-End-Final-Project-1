import Barnds from "../brands/Brands";
import NewArrivals from "../newarrivals/NewArrivals";
import MySwiper from "../swiper/MySwiper";
import BottomCards from "../bottomcards/BottomCards";
import HeroSection from "../herosection/HeroSection";
import '../../app.css'
const HomePage = () => {
  return (
    <>
      <div className="main">
        <div className="main-2">
          <HeroSection></HeroSection>
          <NewArrivals></NewArrivals>
          <MySwiper></MySwiper>
          <Barnds></Barnds>
          <BottomCards></BottomCards>
        </div>
      </div>
    </>
  );
};
export default HomePage;
