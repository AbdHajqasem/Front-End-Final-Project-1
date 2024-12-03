import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const Layout = () => {
  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      minHeight:"100vh"
    }
    }
    >
      <NavBar />
        <Outlet />
        <Footer></Footer>
    </Box>
  );
};

export default Layout;
