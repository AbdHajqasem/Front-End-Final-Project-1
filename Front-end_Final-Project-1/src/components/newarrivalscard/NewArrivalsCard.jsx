import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NewArrivalsCard = (prop) => {
  return (
    <>
        <Box
          sx={{
            backgroundColor: "var(--button-bg-color)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            height: "412px",
            maxWidth: { lg: "286px" },
          }}
        >
          <Box
            sx={{
              height: "286px",
              overflow: "hidden",
              width: "100%",
              borderRadius: "10px",
              backgroundImage: `url(${prop.img})`,
              backgroundPosition: "center 70%",
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "5px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                Grande
              </Typography>
              <FavoriteBorderIcon className="fav-icon" />
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "#626262",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Blossom Pouch
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                {prop.price}
              </Typography>
            </Box>
          </Box>
        </Box>
    </>
  );
};

export default NewArrivalsCard;
