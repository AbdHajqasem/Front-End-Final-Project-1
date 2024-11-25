import { Box, Typography } from "@mui/material";
import Background from "../assets/About_Images/Main.jpg";

const MainImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5vh",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Background})`,
          width: "100vw",
          height: "50vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertically center the content
          alignItems: "flex-end", // Place the content on the right side
          paddingRight: "5vw", // Add space from the right edge
        }}
      >
        {/* Text container */}
        <Box
          sx={{
            textAlign: "left", // Left-align text inside this box
            maxWidth: "30%", // Optional: Control text container width
          }}
        >
          {/* "About" text */}
          <Typography
            variant="h2"
            sx={{
              color: "#13101E",
              fontWeight: 600,
              fontSize: "2.6vw",
              marginBottom: "1rem",
              lineHeight: "1.21em", // CamelCase for lineHeight
              letterSpacing: "0.23em",
            }}
          >
            About
          </Typography>

          {/* Paragraph text */}
          <Typography
            variant="h5"
            sx={{
              color: "#626262",
              fontSize: "1rem",
              lineHeight: "1.5",
              fontSize: "1rem",
              fontweight: 400,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainImage;
