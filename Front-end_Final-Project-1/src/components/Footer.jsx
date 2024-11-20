// import React from "react";
// import { Box, Typography, Divider, Stack } from "@mui/material";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import facebook from "../assets/icons/facebook.svg";
// import instagram from "../assets/icons/instagram.svg";
// import twitter from "../assets/icons/twitter.svg";
// import youTube from "../assets/icons/youtube.svg";

// const Footer = () => {
//   console.log("Footer is rendering");
//   return (
//     <Box sx={{ backgroundColor: "#1b4b66" }} width="100%">
//       <Stack
//         direction={{ xs: "column", sm: "row" }}
//         justifyContent="space-between"
//         sx={{ padding: "4vw", paddingBottom: "8vh" }} // Updated to use responsive units
//         spacing={3}
//       >
//         <Stack
//           direction={{ xs: "column", sm: "row" }}
//           spacing={{ xs: 3, md: 10 }}
//         >
//           <Stack spacing={1}>
//             <Typography sx={{ color: "white" }} component="div">
//               Shop by Category
//             </Typography>
//             <Typography sx={{ color: "#B6B6B6" }}>Skincare</Typography>
//             <Typography sx={{ color: "#B6B6B6" }}>Personal Care</Typography>
//             <Typography sx={{ color: "#B6B6B6" }}>Handbags</Typography>
//             <Typography sx={{ color: "#B6B6B6" }}>Apparel</Typography>
//             <Typography sx={{ color: "#B6B6B6" }}>Watches</Typography>
//             <Typography sx={{ color: "#B6B6B6" }}>Jewelry</Typography>
//           </Stack>
//         </Stack>

//         <Stack spacing={2}>
//           <Divider
//             sx={{
//               width: "100%",
//               height: "0.1vh", // Small divider height with viewport height
//               bgcolor: "primary.tint",
//               display: { xs: "block", sm: "none" }, // Hide divider on large screens
//             }}
//           />
//           <Stack
//             direction="row"
//             gap={2}
//             justifyContent={{ xs: "flex-start", sm: "flex-end" }}
//             flexWrap="wrap"
//           >
//             <img
//               src={facebook}
//               alt="Facebook"
//               style={{ width: "4vw", height: "4vw" }} // Responsive width and height
//             />
//             <img
//               src={instagram}
//               alt="Instagram"
//               style={{ width: "4vw", height: "4vw" }} // Responsive width and height
//             />
//             <img
//               src={twitter}
//               alt="Twitter"
//               style={{ width: "4vw", height: "4vw" }} // Responsive width and height
//             />
//             <img
//               src={youTube}
//               alt="YouTube"
//               style={{ width: "4vw", height: "4vw" }} // Responsive width and height
//             />
//           </Stack>

//           <Stack spacing={0.5}>
//             <Stack
//               direction="row"
//               alignItems="center"
//               spacing={1}
//               justifyContent={{ xs: "flex-start", sm: "flex-end" }}
//             >
//               <LocationOnOutlinedIcon
//                 sx={{ color: "white" }}
//                 fontSize="medium"
//               />
//               <Typography sx={{ color: "white" }}>United States</Typography>
//             </Stack>
//             <Typography sx={{ color: "#B6B6B6" }}>
//               © 2021 | Cora Leviene All Rights Reserved
//             </Typography>
//           </Stack>
//         </Stack>
//       </Stack>
//     </Box>
//   );
// };

// export default Footer;

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
    <Box sx={{ backgroundColor: "#1b4b66", width: "100%" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }} // Stack direction for small and large screens
        justifyContent="space-between"
        sx={{
          padding: { xs: "8vw", sm: "4vw" }, // Padding for both small and large screens
          paddingBottom: { xs: "10vh", sm: "8vh" }, // Bottom padding for mobile and desktop
        }}
        spacing={3}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }} // Vertical stack on small screens, horizontal on large
          spacing={{ xs: 3, sm: 5 }} // Increased space for larger screens
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
              height: "0.1vh", // Divider height based on viewport height
              bgcolor: "primary.tint",
              display: { xs: "block", sm: "none" }, // Only show divider on mobile
            }}
          />
          <Stack
            direction="row"
            gap={2}
            justifyContent={{ xs: "flex-start", sm: "flex-end" }} // Alignment for icons
            flexWrap="wrap" // Allow wrap for mobile if needed
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "5vw", height: "5vw" }} // Make icons more responsive
            />
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "5vw", height: "5vw" }}
            />
            <img
              src={twitter}
              alt="Twitter"
              style={{ width: "5vw", height: "5vw" }}
            />
            <img
              src={youTube}
              alt="YouTube"
              style={{ width: "5vw", height: "5vw" }}
            />
          </Stack>

          <Stack spacing={0.5}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              justifyContent={{ xs: "flex-start", sm: "flex-end" }} // Align on small vs. large screens
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
