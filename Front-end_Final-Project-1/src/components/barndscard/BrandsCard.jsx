import { Box } from "@mui/material";

const BrandsCard = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "168px",
          width: "168px",
          borderRadius: "16px",
          background: "#F4F4F4",
        }}
      >
        <Box
          component="img"
          src="c9c39da9-a1b4-4c42-ad88-29bd51715084.jpg"
          alt=""
          sx={{
            position: "absolute",
            width: "109.36px",
            height: "46px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>
    </>
  );
};

export default BrandsCard;
