import { Box } from "@mui/material";

const BrandsCard = (prop) => {
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
          src={prop.brandLogo}
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
