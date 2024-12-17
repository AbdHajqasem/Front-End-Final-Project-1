import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const CartPopup = ({ isOpen, toggleDrawer }) => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  const userId = "93a2600e-6f3c-4628-ab5e-20f71891c828";
  const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `https://backend-final-1-1-bkpd.onrender.com/api/carts/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setCartItems(response.data.cartItems);
      } catch (err) {
        setError(err.message);
      }
    };

    if (userId) {
      fetchCartItems();
    }
  }, []);

  const updateCartItemQuantity = async (cartId, newQuantity) => {
    try {
      const response = await axios.put(
        `https://backend-final-1-1-bkpd.onrender.com/api/carts/${cartId}`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === cartId
            ? {
                ...item,
                quantity: newQuantity,
                totalPriceAfterDiscount: parseFloat(
                  response.data.updatedCartItem.totalPriceAfterDiscount.toFixed(
                    2
                  )
                ),
              }
            : item
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

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

      setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartId));
    } catch (err) {
      setError(err.message);
    }
  };

  const calculateSubtotal = () =>
    cartItems.reduce(
      (total, item) => total + parseFloat(item.totalPriceAfterDiscount || 0),
      0
    );

  const tax = 12;
  const total = calculateSubtotal() + tax;

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "460px",
          padding: "16px",
          boxSizing: "border-box",
          height: "702px",
          overflow: "auto",
          top: "104px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Cart</Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      {cartItems.map((cartItem, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              borderBottom: "1px solid #ddd",
              pb: 2,
            }}
          >
            <img
              src={cartItem.product.imageUrl}
              alt="Item"
              style={{ width: "50px", height: "50px", marginRight: "16px" }}
            />
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="subtitle1">
                  {cartItem.product.name}
                </Typography>
                <IconButton onClick={() => removeItem(cartItem.id)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {cartItem.description || "Leather Coach Bag"}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    border: "1px solid",
                    width: "73px",
                    height: "30px",
                    borderRadius: "3px",
                  }}
                >
                  <Button
                    size="small"
                    sx={{ width: "24px", height: "24px", minWidth: "24px" }}
                    onClick={() =>
                      cartItem.quantity > 1 &&
                      updateCartItemQuantity(cartItem.id, cartItem.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <Typography>{cartItem.quantity || 1}</Typography>
                  <Button
                    size="small"
                    sx={{ width: "24px", height: "24px", minWidth: "24px" }}
                    onClick={() =>
                      updateCartItemQuantity(cartItem.id, cartItem.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </Box>
                <Typography variant="body1">
                  ${cartItem.totalPriceAfterDiscount.toFixed(2)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}

      <Box sx={{ mt: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Subtotal:</Typography>
          <Typography>${calculateSubtotal().toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography>Tax:</Typography>
          <Typography>${tax.toFixed(2)}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <Typography>Total:</Typography>
          <Typography>${total.toFixed(2)}</Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            width: "328px",
            justifySelf: "center",
          }}
        >
          <TextField
            size="small"
            placeholder="Apply Coupon Code"
            sx={{
              display: "flex",
              height: "56px",
              backgroundColor: "#F1F1F1",
              flexGrow: 1,
              "& .MuiOutlinedInput-root": {
                border: "none",
                padding: "0px",
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "16.5px 14px",
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              padding: "0px",
              boxShadow: "none",
              color: "#1B4B66",
              backgroundColor: "#F1F1F1",
              "&:hover": {
                backgroundColor: "#F1F1F1",
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: "#F1F1F1",
                boxShadow: "none",
              },
              "&:focus": {
                outline: "none",
              },
            }}
          >
            CHECK
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 3,
          textAlign: "center",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "360px",
            backgroundColor: "#1B4B66",
            borderRadius: "8px",
          }}
        >
          <NavLink
            to={"/Cart"}
            style={{ textDecoration: "none", color: "white" }}
            onClick={toggleDrawer(false)}
          >
            Place Order
          </NavLink>
        </Button>
        <Button
          variant="text"
          sx={{ mt: 1, textDecoration: "underline", color: "#1B4B66" }}
        >
          Continue Shopping
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartPopup;
