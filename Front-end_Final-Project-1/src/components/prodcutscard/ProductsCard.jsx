import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from '@mui/icons-material/Star';

const ProductsCard = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gap: "40px",
          gridTemplateColumns: "repeat(auto-fill, minmax(286px, 1fr))",
        }}
      >
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
              backgroundImage: "url('029ef5971eaa1f9cc5c527e9d758efcb.png')",
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
              <Box sx={{display:"flex", gap:"8px", alignItems:"end"}}>
                <Box>
              <StarIcon sx={{
                  fontSize: "30px",
                  color:"#FF8C4B",
                }}></StarIcon>
                   <StarIcon sx={{
                  fontSize: "30px",
                  color:"#FF8C4B",
                }}></StarIcon>
                   <StarIcon sx={{
                  fontSize: "30px",
                  color:"#FF8C4B",
                }}></StarIcon>
                   <StarIcon sx={{
                  fontSize: "30px",
                  color:"#FF8C4B",
                }}></StarIcon>
                   <StarIcon sx={{
                  fontSize: "30px",
                  color:"#FF8C4B",
                }}></StarIcon>
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  color:"#1B4B66",
                  marginBottom:"8px",
                  fontWeight:500
                }}
              >
               43 Ratings
              </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                32.26$
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductsCard;
