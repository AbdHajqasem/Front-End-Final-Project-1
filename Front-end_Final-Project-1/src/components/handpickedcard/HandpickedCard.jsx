import { Box, Typography } from "@mui/material";

const HandpickedCard = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "280px",
          height: "280px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/perfume.jpg"
          alt=""
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: "232px",
            left: "16px",
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: 600,
            color: "#171520",
          }}
        >
          Personal Care
        </Typography>
      </Box>
    </>
  );
};

export default HandpickedCard;
