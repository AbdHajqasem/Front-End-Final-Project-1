import React from "react";
import { Box, Typography, Divider, Stack } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import youTube from "../assets/icons/youtube.svg";

const Footer = () => {
  console.log("Footer is rendering");
  return (
    <Box sx={{ backgroundColor: "#1b4b66" }} width="100%">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{ padding: "4vw", paddingBottom: "8vh" }} // Updated to use responsive units
        spacing={3}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, md: 10 }}
        >
          <Stack spacing={1}>
            <Typography sx={{ color: "white" }} component="div">
              Shop by Category
            </Typography>
            <Typography sx={{ color: "#B6B6B6" }}>Skincare</Typography>
            <Typography sx={{ color: "#B6B6B6" }}>Personal Care</Typography>
            <Typography sx={{ color: "#B6B6B6" }}>Handbags</Typography>
            <Typography sx={{ color: "#B6B6B6" }}>Apparel</Typography>
            <Typography sx={{ color: "#B6B6B6" }}>Watches</Typography>
            <Typography sx={{ color: "#B6B6B6" }}>Jewelry</Typography>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <Divider
            sx={{
              width: "100%",
              height: "0.1vh", // Small divider height with viewport height
              bgcolor: "primary.tint",
              display: { xs: "block", sm: "none" },
            }}
          />
          <Stack
            direction="row"
            gap={2}
            justifyContent={{ xs: "flex-start", sm: "flex-end" }}
            flexWrap="wrap"
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "4vw", height: "4vw" }} // Responsive width and height
            />
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "4vw", height: "4vw" }} // Responsive width and height
            />
            <img
              src={twitter}
              alt="Twitter"
              style={{ width: "4vw", height: "4vw" }} // Responsive width and height
            />
            <img
              src={youTube}
              alt="YouTube"
              style={{ width: "4vw", height: "4vw" }} // Responsive width and height
            />
          </Stack>

          <Stack spacing={0.5}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              justifyContent={{ xs: "flex-start", sm: "flex-end" }}
            >
              <LocationOnOutlinedIcon
                sx={{ color: "white" }}
                fontSize="medium"
              />
              <Typography sx={{ color: "white" }}>United States</Typography>
            </Stack>
            <Typography sx={{ color: "#B6B6B6" }}>
              © 2021 | Cora Leviene All Rights Reserved
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
