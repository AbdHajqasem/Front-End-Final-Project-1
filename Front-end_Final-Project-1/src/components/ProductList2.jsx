import React, { useState } from "react";
import { Box, Grid, Card, Stack, Pagination } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link as RouterLink } from "react-router-dom";
import black from "../assets/HandBags/black.jpg";
import brown from "../assets/HandBags/brown.jpg";
import travel from "../assets/HandBags/travel.jpg";
import pink from "../assets/HandBags/pink.jpg";
// import database from "../../public/database.json";

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
      images: [{ publicURL: brown }],
    },
    {
      id: "product-3",
      name: "Product 3",
      description: "Product 3 comes with advanced features that you will love.",
      price: 249.99,
      discount: { discountRate: 30 },
      ratingsNum: 75,
      images: [{ publicURL: pink }],
    },
    {
      id: "product-4",
      name: "Product 4",
      description:
        "This is the fourth product. Best for those who want quality.",
      price: 349.99,
      discount: { discountRate: 10 },
      ratingsNum: 230,
      images: [{ publicURL: travel }],
    },
    {
      id: "product-5",
      name: "Product 5",
      description: "Product 5 has excellent features and a great price.",
      price: 199.99,
      discount: { discountRate: 5 },
      ratingsNum: 310,
      images: [{ publicURL: black }],
    },
    {
      id: "product-6",
      name: "Product 6",
      description: "The sixth product offers unmatched durability.",
      price: 299.99,
      discount: { discountRate: 25 },
      ratingsNum: 50,
      images: [{ publicURL: brown }],
    },
    {
      id: "product-7",
      name: "Product 7",
      description: "This is a lightweight and portable product.",
      price: 179.99,
      discount: { discountRate: 18 },
      ratingsNum: 180,
      images: [{ publicURL: pink }],
    },
    {
      id: "product-8",
      name: "Product 8",
      description: "Perfect for those seeking value and performance.",
      price: 459.99,
      discount: { discountRate: 12 },
      ratingsNum: 60,
      images: [{ publicURL: travel }],
    },
    {
      id: "product-9",
      name: "Product 9",
      description: "Great choice for professionals and enthusiasts alike.",
      price: 559.99,
      discount: { discountRate: 20 },
      ratingsNum: 90,
      images: [{ publicURL: black }],
    },
    {
      id: "product-10",
      name: "Product 10",
      description: "Product 10 stands out with its premium design.",
      price: 129.99,
      discount: { discountRate: 8 },
      ratingsNum: 250,
      images: [{ publicURL: brown }],
    },
    {
      id: "product-11",
      name: "Product 11",
      description: "This product is a must-have for your collection.",
      price: 399.99,
      discount: { discountRate: 15 },
      ratingsNum: 140,
      images: [{ publicURL: pink }],
    },
    {
      id: "product-12",
      name: "Product 12",
      description: "Affordable and reliable, this product is highly rated.",
      price: 89.99,
      discount: { discountRate: 10 },
      ratingsNum: 170,
      images: [{ publicURL: travel }],
    },
    {
      id: "product-13",
      name: "Product 13",
      description: "High performance with elegant styling.",
      price: 689.99,
      discount: { discountRate: 35 },
      ratingsNum: 40,
      images: [{ publicURL: black }],
    },
    {
      id: "product-14",
      name: "Product 14",
      description: "An environmentally friendly and efficient product.",
      price: 249.99,
      discount: { discountRate: 20 },
      ratingsNum: 110,
      images: [{ publicURL: brown }],
    },
    {
      id: "product-15",
      name: "Product 15",
      description: "This product offers exceptional comfort and style.",
      price: 379.99,
      discount: { discountRate: 28 },
      ratingsNum: 65,
      images: [{ publicURL: pink }],
    },
    {
      id: "product-16",
      name: "Product 16",
      description: "This durable product is perfect for everyday use.",
      price: 329.99,
      discount: { discountRate: 22 },
      ratingsNum: 210,
      images: [{ publicURL: travel }],
    },
    {
      id: "product-17",
      name: "Product 17",
      description: "A sleek design combined with cutting-edge features.",
      price: 459.99,
      discount: { discountRate: 18 },
      ratingsNum: 120,
      images: [{ publicURL: black }],
    },
    {
      id: "product-18",
      name: "Product 18",
      description: "Compact, lightweight, and high-performing.",
      price: 199.99,
      discount: { discountRate: 12 },
      ratingsNum: 270,
      images: [{ publicURL: brown }],
    },
    {
      id: "product-19",
      name: "Product 19",
      description: "This is an ideal product for outdoor activities.",
      price: 89.99,
      discount: { discountRate: 5 },
      ratingsNum: 300,
      images: [{ publicURL: pink }],
    },
    {
      id: "product-20",
      name: "Product 20",
      description: "Premium materials and flawless performance.",
      price: 599.99,
      discount: { discountRate: 15 },
      ratingsNum: 130,
      images: [{ publicURL: travel }],
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
    <Box
      component="div"
      sx={{
        width: "80%", // Set the width of the container
        display: "flex", // Use flexbox to center the content
        flexDirection: "column", // Align items in a column
        alignItems: "center", // Align items horizontally (center)
        alignContent: "center", // Align content vertically (center)
        justifyContent: "center", // Ensure vertical centering in case of additional space
        mb: "69px", // Margin at the bottom
        px: { xs: 3, sm: 4 }, // Horizontal padding (responsive)
        mx: "auto",
      }}
    >
      <Grid container spacing={2} sx={{ width: { xs: "100%", md: "90%" } }}>
        {currentItems.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={product.id}
            sx={{ width: 1 }}
          >
            <Card
              component={RouterLink}
              sx={{ width: 1, textDecoration: "none" }}
              to={`/product/${product.id}`}
            >
              <Box component="section" sx={{ width: 1 }}>
                <img
                  src={product.images && product.images[0]?.publicURL}
                  style={{
                    width: "100%",
                    height: "250px",
                    maxHeight: "285px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    maxWidth: "100%",
                  }}
                  alt={product.name}
                />
              </Box>

              <Box
                component="section"
                sx={{
                  width: 1,
                  display: "flex",
                  flexDirection: "column",
                  p: { xs: 1, md: 2 },
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    mb: 1,
                  }}
                >
                  <Box
                    component="p"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      component="p"
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "14px", md: "16px" },
                        color: "#171520",
                        mb: "2px",
                      }}
                    >
                      {product.name}
                    </Box>

                    <Box
                      component="p"
                      sx={{
                        m: 0,
                        mt: "5px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </Box>
                  </Box>

                  <Box
                    component="p"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#626262",
                    }}
                  >
                    {product.description}
                  </Box>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Box component="p" sx={{ color: "#FF8C4B", m: 0, mr: 2 }}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      m: 0,
                      color: "#1B4B66",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "18px",
                    }}
                  >
                    {product.ratingsNum} Ratings
                  </Box>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "",
                    mb: 1,
                  }}
                >
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#171520",
                      m: 0,
                      mr: 2,
                    }}
                  >
                    ${product.price}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "14px", md: "14px" },
                      color: "#626262",
                      lineHeight: "20px",
                      textDecoration: "line-through",
                      m: 0,
                      mr: 2,
                    }}
                  >
                    $
                    {(
                      product.price /
                      (1 - product.discount.discountRate / 100)
                    ).toFixed(2)}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#E21D1D",
                      lineHeight: "20px",
                      m: 0,
                    }}
                  >
                    {product.discount.discountRate}% OFF
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ mt: 4 }}>
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
  );
};

export default ProductList;
