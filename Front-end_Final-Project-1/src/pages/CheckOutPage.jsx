import React, { useState, useRef } from "react";
import { Container, Box, Button, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import CheckoutHeader from "../components/checkoutheader/CheckOutHeader";
import AddressForm from "../components/adressform/AdressForm";
import OrderSummary from "../components/ordersummary/OrderSummary";
import axios from "axios";

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
  console.log(response.data);

  return response.data;
};

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const userId = "93a2600e-6f3c-4628-ab5e-20f71891c828";
  const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");

  const { data: cartData, isLoading, error } = useQuery({
    queryKey: ["cartItems", userId, token],
    queryFn: fetchCartItems,
  });

  const handleOrderPlacement = async (formData) => {
    setLoading(true);
    try {
      await axios.put(
        `https://backend-final-1-1-bkpd.onrender.com/users/${userId}`,
        {
          email: formData.email,
          first: formData.firstName,
          last: formData.lastName,
          mobile: formData.mobile,
          address: formData.address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const response = await axios.post(
        "https://backend-final-1-1-bkpd.onrender.com/place-order",
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Order placed successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Failed to update information or place the order.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlaceOrderClick = () => {
    if (formRef.current) {
      formRef.current.submitForm();
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

  return (
    <Container>
      <CheckoutHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
          mt: 4,
        }}
      >
        {/* Address Form Section */}
        <Box sx={{ flex: 2, width: { xs: "100%" } }}>
          <AddressForm ref={formRef} onSubmit={handleOrderPlacement} />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              mb: 10,
              py: 1.5,
              width: { xs: "100%", sm: "auto" },
              backgroundColor: "#1b4b66",
            }}
            onClick={handlePlaceOrderClick}
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </Button>
        </Box>

        {/* Order Summary Section */}
        <Box sx={{ flex: 1, maxWidth: { xs: "100%", sm: "400px" } }}>
          {error ? (
            <Box
              sx={{
                width: "100%",
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "red",
              }}
            >
              <Typography variant="h6">No Items in the cart</Typography>
            </Box>
          ) : (
            <OrderSummary cartItems={cartData?.cartItems} summary={cartData?.summary} />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
