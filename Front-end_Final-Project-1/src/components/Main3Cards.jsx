// import React from "react";
// import { Box, Typography, Grid, Button } from "@mui/material";
// import Lifestyle from "../assets/images/Lifestyle.png";
// import SkincareEssentials from "../assets/images/SkincareEssentials.png";
// import Facepack from "../assets/images/Facepack.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const Main3Cards = () => {
//   return (
//     <Box
//       sx={{
//         maxWidth: "100vw",
//         margin: "0 auto",
//         padding: "2vh",
//       }}
//     >
//       {/* Main Image Section */}
//       <Box sx={{ position: "relative", marginBottom: "5vh" }}>
//         <img
//           src={Lifestyle}
//           alt="Lifestyle"
//           style={{
//             width: "100%",
//             height: "40vh",
//             objectFit: "cover",
//             borderRadius: "1vh",
//           }}
//         />
//         {/* Lifestyle Text Overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "40%",
//             left: "5%",
//             color: "#fff",
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 400,
//               fontSize: "5vh",
//               width: "20.8vh",
//               height: "2.7",
//               lineHeight: "3vh",
//               color: "#97451F",
//               position: "absolute",
//               top: "-5vh",
//               width: "20vw",
//               textAlign: "left",
//             }}
//           >
//             LIFESTYLE
//           </Typography>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: 700,
//               fontSize: "7.04vh",
//               width: "83vh",
//               height: "18.4vh",

//               lineHeight: "8vh",
//               color: "#97451F",
//               position: "absolute",
//               top: "5vh",

//               textAlign: "left",
//             }}
//           >
//             Makeup Accessories from Top Brands
//           </Typography>
//         </Box>
//       </Box>

//       {/* Bottom Row (Skincare and Facepacks sections) */}
//       <Grid container spacing={4}>
//         {/* Skincare Section */}
//         <Grid item xs={12} sm={6}>
//           <Box
//             sx={{
//               position: "relative",
//               padding: "2vh",
//               backgroundColor: "#F4E1D2",
//               borderRadius: "1vh",
//               textAlign: "center",
//               height: "30vh",
//               overflow: "hidden",
//               maxWidth: "80vw",
//               margin: "0 auto",
//             }}
//           >
//             <img
//               src={SkincareEssentials}
//               alt="Skincare Essentials"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: "1vh",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//               }}
//             />
//             <Box
//               sx={{
//                 position: "relative",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 textAlign: "center",
//                 color: "#fff",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   position: "relative",
//                   fontWeight: 700,
//                   fontSize: "5.4vh",
//                   lineHeight: "7vh",
//                   color: "#A53F64",
//                   width: "41vh",
//                   height: "14",
//                   textAlign: "right",
//                   left: "50vh",
//                 }}
//               >
//                 Skincare Essentials
//               </Typography>

//               <Button
//                 variant="text"
//                 sx={{
//                   top: "2vh",
//                   left: "80vh",
//                   fontSize: "2.5vh",
//                   width: "6vh",
//                   height: "6vh",
//                   minWidth: "unset",
//                   backgroundColor: "#fff",
//                   color: "#A53F64",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 0.5vh 1vh rgba(0, 0, 0, 0.2)",
//                   "&:hover": {
//                     backgroundColor: "#f7f7f7",
//                   },
//                 }}
//               >
//                 <ArrowForwardIcon
//                   sx={{
//                     fontSize: "4vh",
//                     transform: "scaleX(1.5,1.5)",
//                   }}
//                 />
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//         {/* Facepacks Section */}
//         <Grid item xs={12} sm={6}>
//           <Box
//             sx={{
//               position: "relative",
//               padding: "2vh",
//               backgroundColor: "#F4E1D2",
//               borderRadius: "1vh",
//               textAlign: "center",
//               height: "30vh",
//               overflow: "hidden",
//               maxWidth: "80vw",
//               margin: "0 auto",
//             }}
//           >
//             <img
//               src={Facepack}
//               alt="Facepacks & Peels"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: "1vh",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//               }}
//             />
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 textAlign: "center",
//                 color: "#fff",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: 700,
//                   position: "relative",
//                   fontSize: "5.4vh",
//                   lineHeight: "7vh",
//                   color: "#1B4B66",
//                   width: "31.4vh",
//                   textAlign: "right",
//                   left: "30vh",
//                 }}
//               >
//                 Facepacks & Peels
//               </Typography>
//               <Button
//                 variant="text"
//                 sx={{
//                   top: "2vh",
//                   left: "50vh",
//                   fontSize: "2.5vh",
//                   width: "6vh",
//                   height: "6vh",
//                   minWidth: "unset",
//                   backgroundColor: "#D3D3D3",
//                   color: "#1B4B66",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 0.5vh 1vh rgba(0, 0, 0, 0.2)",
//                   "&:hover": {
//                     backgroundColor: "#f7f7f7",
//                   },
//                 }}
//               >
//                 <ArrowForwardIcon
//                   sx={{
//                     fontSize: "4vh",
//                     transform: "scaleX(1.5,1.5)",
//                   }}
//                 />
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Main3Cards;

import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Lifestyle from "../assets/images/Lifestyle.png";
import SkincareEssentials from "../assets/images/SkincareEssentials.png";
import Facepack from "../assets/images/Facepack.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Main3Cards = () => {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        margin: "0 auto",
        padding: "2vh",
      }}
    >
      {/* Main Image Section */}
      <Box sx={{ position: "relative", marginBottom: "5vh" }}>
        <img
          src={Lifestyle}
          alt="Lifestyle"
          style={{
            width: "100%",
            height: "40vh",
            objectFit: "cover",
            borderRadius: "1vh",
          }}
        />
        {/* Lifestyle Text Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "5%",
            color: "#fff",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "5vh", sm: "5vh" },
              width: { xs: "50vw", sm: "20vw" },
              lineHeight: "2vh",
              color: "#97451F",
              position: "absolute",
              top: "-5vh",
              textAlign: "left",
            }}
          >
            LIFESTYLE
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "5vh", sm: "7.04vh" },
              width: { xs: "80vw", sm: "83vh" },
              lineHeight: "6vh",
              color: "#97451F",
              position: "absolute",
              top: "-2vh",
              textAlign: "left",
            }}
          >
            Makeup Accessories from Top Brands
          </Typography>
        </Box>
      </Box>

      {/* Bottom Row (Skincare and Facepacks sections) */}
      <Grid container spacing={4}>
        {/* Skincare Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              position: "relative",
              padding: "2vh",
              backgroundColor: "#F4E1D2",
              borderRadius: "1vh",
              textAlign: "center",
              height: "30vh",
              overflow: "hidden",
              maxWidth: "80vw",
              margin: "0 auto",
            }}
          >
            <img
              src={SkincareEssentials}
              alt="Skincare Essentials"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1vh",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            <Box
              sx={{
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  position: "relative",
                  fontWeight: 700,
                  fontSize: { xs: "6vh", sm: "5.4vh" },
                  lineHeight: "7vh",
                  color: "#A53F64",
                  width: { xs: "70vw", sm: "41vh" },
                  textAlign: "right",
                  left: { xs: "10vw", sm: "50vh" },
                }}
              >
                Skincare Essentials
              </Typography>

              <Button
                variant="text"
                sx={{
                  top: "2vh",
                  left: { xs: "50%", sm: "80vh" },
                  fontSize: { xs: "3vh", sm: "2.5vh" },
                  height: "6vh",
                  minWidth: "unset",
                  backgroundColor: "#fff",
                  color: "#A53F64",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0.5vh 1vh rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: "#f7f7f7",
                  },
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    fontSize: "4vh",
                    transform: "scaleX(1.5,1.5)",
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* Facepacks Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              position: "relative",
              padding: "2vh",
              backgroundColor: "#F4E1D2",
              borderRadius: "1vh",
              textAlign: "center",
              height: "30vh",
              overflow: "hidden",
              maxWidth: "80vw",
              margin: "0 auto",
            }}
          >
            <img
              src={Facepack}
              alt="Facepacks & Peels"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1vh",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  position: "relative",
                  fontSize: { xs: "6vh", sm: "5.4vh" },
                  lineHeight: "7vh",
                  color: "#1B4B66",
                  width: { xs: "70vw", sm: "31.4vh" },
                  textAlign: "right",
                  left: { xs: "10vw", sm: "30vh" },
                }}
              >
                Facepacks & Peels
              </Typography>
              <Button
                variant="text"
                sx={{
                  top: "2vh",
                  left: { xs: "50%", sm: "50vh" },
                  fontSize: { xs: "4vh", sm: "3vh" },
                  height: "6vh",
                  minWidth: "unset",
                  backgroundColor: "#D3D3D3",
                  color: "#1B4B66",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0.5vh 1vh rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: "#f7f7f7",
                  },
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    fontSize: { xs: "5vh", sm: "4vh" },
                    transform: "scaleX(1.5, 1.5)",
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main3Cards;
