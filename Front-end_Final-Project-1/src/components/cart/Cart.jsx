import {
    Box,
    Button,
    Container,
    Link,
    Typography,
    CircularProgress,
    Divider,
  } from "@mui/material";
  import { useQuery } from "@tanstack/react-query";
  import axios from "axios";
  import CartCard from "../cartcard/CartCard";
import { NavLink } from "react-router-dom";
  
  const fetchCartItems = async ({ queryKey }) => {
    const [, userId, token] = queryKey;
    const response = await axios.get(
      `https://backend-final-1-1-bkpd.onrender.com/api/carts/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };
  
  const Cart = () => {
    const userId = "93a2600e-6f3c-4628-ab5e-20f71891c828";
    const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");
  
    const { data: cartData, isLoading, error, refetch } = useQuery({
      queryKey: ["cartItems", userId, token],
      queryFn: fetchCartItems,
    });
  
    const removeItem = async (cartId) => {
      try {
        await axios.delete(
          `https://backend-final-1-1-bkpd.onrender.com/api/carts/${cartId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        refetch(); 
      } catch (err) {
        console.error("Error removing item:", err.message);
      }
    };
  
    if (isLoading) {
      return (
        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
  
    if (error) {
      return (
        <Box
          sx={{
            width: "100%",
            flexGrow:1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
          }}
        >
          <Typography variant="h6">No Items in the cart</Typography>
        </Box>
      );
    }
  
    const { cartItems, summary } = cartData;
  
    return (
      <Container sx={{ flexGrow: 1, marginBottom: "10px" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              textAlign: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              underline="none"
              sx={{
                color: "#1b4b66",
                fontSize: "1rem",
              }}
            >
              Home
            </Link>
            <Typography
              sx={{
                color: "black",
                fontSize: "1rem",
              }}
            >
              {'>'}
            </Typography>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "#626262",
                fontSize: "1rem",
              }}
            >
              My Cart
            </Link>
          </Box>
          <Typography
            variant="h1"
            sx={{
              color: "#1b4b66",
              marginTop: "20px",
              marginBottom: "30px",
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            My Cart
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: { xs: "20px", md: "0" },
              marginTop: "120px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", md: "58.8525%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#626262",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: "10px", sm: "0" },
                }}
              >
                <Box>
                  <Typography component={"p"}>Product Name</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "10px",
                    width: { xs: "100%", sm: "35%" },
                    gap: "10px",
                  }}
                >
                  <Typography component={"p"}>Price</Typography>
                  <Typography component={"p"}>Qty</Typography>
                  <Typography component={"p"}>Subtotal</Typography>
                </Box>
              </Box>
              <Divider />
              {cartItems.map((item, index) => (
                <CartCard key={index} item={item} onRemove={removeItem} />
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", md: "33.226%" },
              }}
            >
              <Typography
                component={"h2"}
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >
                Order Summary
              </Typography>
              <Divider
                sx={{
                  marginBottom: "20px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography component={"p"} color="#626262">
                    Subtotal
                  </Typography>
                  <Typography component={"p"}>${summary.subtotal}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography component={"p"} color="#626262">
                    Discount
                  </Typography>
                  <Typography component={"p"}>-${summary.discount}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography component={"p"} color="#626262">
                    Delivery Fee
                  </Typography>
                  <Typography component={"p"}>${summary.deliveryFee}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography component={"p"} fontWeight={600}>
                    Grand Total
                  </Typography>
                  <Typography component={"p"} fontWeight={600}>
                    ${summary.grandTotal}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    marginTop: "40px",
                    gap: { xs: "10px", sm: "0" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "5px",
                      textTransform: "none",
                      width: { xs: "100%", sm: "47%" },
                      bgcolor: "#1B4B66",
                    }}
                  >
                    <NavLink to={"/CheckOut"}>Place Order</NavLink>
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      borderRadius: "5px",
                      width: { xs: "100%", sm: "47%" },
                      color: "#1B4B66",
                      borderColor: "#1B4B66",
                    }}
                  >
                    Continue Shopping
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default Cart;
  