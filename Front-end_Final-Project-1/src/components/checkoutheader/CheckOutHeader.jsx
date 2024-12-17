import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const CheckoutHeader = () => (
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
        href="/checkout"
        underline="none"
        sx={{
          color: "#626262",
          fontSize: "1rem",
        }}
      >
        Check Out
      </Link>
    </Box>
    <Typography
      variant="h1"
      sx={{
        color: "#1b4b66",
        marginTop: "20px",
        marginBottom: "50px",
        fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
      }}
    >
      Checkout
    </Typography>
  </Box>
);

export default CheckoutHeader;
