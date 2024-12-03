import TwitterIcon from "@mui/icons-material/Twitter";
import YoutubeIcon from "@mui/icons-material/Youtube";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { SocialsButton } from "../socialbutton/SocialButton";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#1b4b66",
          color: "white",
        }}
      >
        <Box
          sx={{
            width: "90%",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              marginTop: "30px",
              marginBottom: "50px",
              gap: { xs: "20px", sm: "0px" },
              "@media (max-width: 600px)": {
                marginBottom: "15px",
              },
            }}
          >
            <Box>
              <Typography>Shop By Category</Typography>
              <List sx={{ listStyleType: "none", padding: 0 }}>
                {[
                  { text: "Skincare", href: "#" },
                  { text: "Personal Care", href: "#" },
                  { text: "Handbags", href: "#" },
                  { text: "Apparels", href: "#" },
                  { text: "Watches", href: "#" },
                  { text: "Jewellery", href: "#" },
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{ padding: 0, marginTop: "8px", display: "list-item" }}
                  >
                    <Link
                      href={item.href}
                      underline="hover"
                      sx={{ color: "#b6b6b6", fontSize: "16px" }}
                    >
                      {item.text}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  justifyContent: { xs: "center", sm: "end" },
                }}
              >
                <SocialsButton href="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </SocialsButton>
                <SocialsButton href="/">
                  <svg
                    fill="#1B4B66"
                    width="25px"
                    height="25px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"></path>{" "}
                    </g>
                  </svg>
                </SocialsButton>
                <SocialsButton href="/">
                  <TwitterIcon />
                </SocialsButton>
                <SocialsButton href="/">
                  <YoutubeIcon />
                </SocialsButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "end" },
                  marginTop: "20px",
                }}
              >
                <Typography
                  component={"p"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FmdGoodOutlinedIcon />
                  United States
                </Typography>
              </Box>
              <Typography
                component={"p"}
                sx={{
                  marginTop: "5px",
                  color: "#B6B6B6",
                  textAlign: { xs: "center", sm: "right" },
                }}
              >
                © 2021 | Cora Leviene All Rights Reserved
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
export default Footer;
