import { Box, Typography } from "@mui/material";
import NewArrivalsCard from "../newarrivalscard/NewArrivalsCard";
const NewArrivals = (prop) => {
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
          {prop.newArrivals.map((newArrival) => (
            <NewArrivalsCard key={newArrival.id}
              id={newArrival.id}
              img={newArrival.imageUrl}
              name={newArrival.name}
              price={newArrival.price}
              category={newArrival.categoryName}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default NewArrivals;
