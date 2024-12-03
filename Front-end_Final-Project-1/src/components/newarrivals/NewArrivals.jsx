import { Box, Typography } from "@mui/material";
import NewArrivalsCard from "../newarrivalscard/NewArrivalsCard";

const NewArrivals = () => {
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
        <NewArrivalsCard />
      </Box>
    </>
  );
};

export default NewArrivals;
