import React, { useState } from "react";
import { Box,Typography, Stack, Pagination } from "@mui/material";
import black from "/029ef5971eaa1f9cc5c527e9d758efcb.png";
import ProductsCard from "../prodcutscard/ProductsCard";
import AnnouncmentsHero from "../announcmentshero/AnnouncmentsHero";

// Dummy JSON data
const data = {
  items: [
    {
      id: "product-1",
      name: "Product 1",
      description:
        "This is the description for Product 1. It has amazing features.",
      price: 99.99,
      discount: { discountRate: 20 },
      ratingsNum: 120,
      images: [{ publicURL: black }],
    },
    {
      id: "product-2",
      name: "Product 2",
      description: "Product 2 is even better. This one is top-rated.",
      price: 149.99,
      discount: { discountRate: 15 },
      ratingsNum: 85,
      images: [{ publicURL: black }],
    },
    {
        id: "product-1",
        name: "Product 1",
        description:
          "This is the description for Product 1. It has amazing features.",
        price: 99.99,
        discount: { discountRate: 20 },
        ratingsNum: 120,
        images: [{ publicURL: black }],
      },
      {
        id: "product-2",
        name: "Product 2",
        description: "Product 2 is even better. This one is top-rated.",
        price: 149.99,
        discount: { discountRate: 15 },
        ratingsNum: 85,
        images: [{ publicURL: black }],
      },

      {
        id: "product-1",
        name: "Product 1",
        description:
          "This is the description for Product 1. It has amazing features.",
        price: 99.99,
        discount: { discountRate: 20 },
        ratingsNum: 120,
        images: [{ publicURL: black }],
      },
      {
        id: "product-2",
        name: "Product 2",
        description: "Product 2 is even better. This one is top-rated.",
        price: 149.99,
        discount: { discountRate: 15 },
        ratingsNum: 85,
        images: [{ publicURL: black }],
      },
  
  ],
  itemsPerPage: 9,
};

const ProductList = () => {
  // State to track current page and the items per page
  const [page, setPage] = useState(1);

  // Extract the items and items per page from the data
  const { items, itemsPerPage } = data;

  // Calculate start and end index for current page items
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page items
  const currentItems = items.slice(startIndex, endIndex);

  // Handle page change
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
<Box sx={{width:"100%", display:"flex", justifyContent:"center",flexGrow:1}}>
    <Box
    sx={{
      display: "flex",
      gap: "20px",
      backgroundColor: "var(--button-bg-color)",
      flexDirection: "column",
      padding: "15px 25px",
      width:"100%",
      maxWidth:"1360px",
      boxSizing: "border-box",
    }}
  >
    <AnnouncmentsHero></AnnouncmentsHero>
    <ProductsCard />
    <Stack spacing={2} sx={{ mt: 4, alignSelf:"center"}}>
        <Pagination
          count={Math.ceil(items.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
          shape="rounded"
          variant="outlined"
          sx={{ mx: "auto" }}
        />
      </Stack>
  </Box>
  </Box>
  );
};

export default ProductList;
