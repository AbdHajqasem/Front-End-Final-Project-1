import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Bags from "../../assets/About_Images/1.jpg";
import Watches from "../../assets/About_Images/1.jpg";
import Glasses from "../../assets/About_Images/1.jpg";
import MainImage from "../About/MainImage";

const About = () => {
  return (
    <Box sx={{ mb: "55px", overflowX: "hidden" }}>
      <Box sx={{ mb: 4 }}>
        <MainImage />
      </Box>
      <Box
        sx={{
          mt: "30px",
          width: "100%",
          maxWidth: 710,
          margin: "0 auto",
          px: 2,
        }}
      >
        <Typography
          align="center"
          variant="h5"
          component="div"
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: { xs: "18px", md: "20px" },
          }}
        >
          About
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="#626262"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: "1.5",
          }}
        >
          Lorem ipsum dolor sit consectetur adipisicing elit. amet consectetur
          adipisicing elit. Ratione cum doloribus quas necessitatibus molestiae
          eum itaque voluptate quisquam, sequi facere. Fugit neque odit soluta
          eius deleniti in natus cum autem.
        </Typography>
      </Box>

      {[Bags, Watches, Glasses].map((image, index) => (
        <Box key={index} sx={{ p: 2, mt: 3 }}>
          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{
              flexDirection: {
                xs: index % 2 === 0 ? "column-reverse" : "column",
                sm: "row",
              },
            }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              order={{ xs: 2, sm: index % 2 === 0 ? 1 : 2 }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  marginBottom: "10px",
                  fontWeight: 600,
                  fontSize: { xs: "18px", md: "20px" },
                }}
              >
                About
              </Typography>
              <Typography
                variant="h6"
                align="left"
                color="#626262"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: "1.5",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus odit nulla illo similique vero natus maiores,
                consectetur adipisicing elit. earum aspernatur nihil sint quidem
                optio deleniti tempora corporis hic? Modi soluta accusamus
                nesciunt?
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              order={{ xs: 1, sm: index % 2 === 0 ? 2 : 1 }}
            >
              <img
                src={image}
                alt="Description"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default About;
