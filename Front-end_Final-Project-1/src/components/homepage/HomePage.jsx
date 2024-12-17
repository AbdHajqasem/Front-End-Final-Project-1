import Barnds from "../brands/Brands";
import NewArrivals from "../newarrivals/NewArrivals";
import HandPicks from "../handpicks/HandPicks";
import BottomCards from "../bottomcards/BottomCards";
import HeroSection from "../herosection/HeroSection";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import "../../app.css";

const fetchNewArrivals = async ({ queryKey }) => {
  const [, token] = queryKey;
  const response = await axios.get(
    "https://backend-final-1-1-bkpd.onrender.com/api/products/new-arrivals",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data;
};

const fetchBrands = async ({ queryKey }) => {
  const [, token] = queryKey;
  const response = await axios.get(
    "https://backend-final-1-1-bkpd.onrender.com/api/brands",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.brands;
};

const HomePage = () => {
  const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");

  const {
    data: newArrivals,
    isLoading: newArrivalsLoading,
    error: newArrivalsError,
  } = useQuery({
    queryKey: ["newArrivals", token],
    queryFn: fetchNewArrivals,
  });

  const {
    data: brands,
    isLoading: brandsLoading,
    error: brandsError,
  } = useQuery({
    queryKey: ["brands", token],
    queryFn: fetchBrands,
  });

  if (newArrivalsLoading || brandsLoading) {
    return (
      <div className="main">
        <div className="main-2">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 801,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
      </div>
      </div>
    );
  }

  if (newArrivalsError || brandsError) {
    return (
      <div>Error: {newArrivalsError?.message || brandsError?.message}</div>
    );
  }

  return (
    <>
    
      <div className="main">
        <div className="main-2">
          <HeroSection></HeroSection>
          <NewArrivals newArrivals={newArrivals}></NewArrivals>
          <HandPicks></HandPicks>
          <Barnds brands={brands}></Barnds>
          <BottomCards></BottomCards>
        </div>
      </div>
    </>
  );
};

export default HomePage;
