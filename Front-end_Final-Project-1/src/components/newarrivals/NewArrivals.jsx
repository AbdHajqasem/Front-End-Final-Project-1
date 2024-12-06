import { Box, Typography } from "@mui/material";
import NewArrivalsCard from "../newarrivalscard/NewArrivalsCard";
import { useState, useEffect } from "react";
import axios from "axios";
const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          "https://backend-final-1-1-bkpd.onrender.com/api/products/new-arrivals",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setNewArrivals(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBrands();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          backgroundColor: "var(--button-bg-color)",
          flexDirection: "column",
          padding: "15px 25px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{
            color: "var(--body-test-color)",
            fontSize: "34px",
            fontWeight: 600,
            lineHeight: "44px",
          }}
        >
          New Arrivals
        </Typography>
        <Box
          sx={{
            height: "412px",
            width: "100%",
            display: "grid",
            gap: "40px",
            gridTemplateColumns: "repeat(auto-fill, minmax(286px, 1fr))",
            overflowY: "hidden",
          }}
        >
          {newArrivals.map((newArrival) => (
            <NewArrivalsCard key={newArrival.dataValues.id}
              img={newArrival.imageUrl}
              name={newArrival.dataValues.name}
              price={newArrival.dataValues.price}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default NewArrivals;
