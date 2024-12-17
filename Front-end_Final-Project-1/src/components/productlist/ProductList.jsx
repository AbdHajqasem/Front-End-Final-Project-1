import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Pagination } from "@mui/material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductsCard from "../prodcutscard/ProductsCard";
import AnnouncmentsHero from "../announcmentshero/AnnouncmentsHero";

const fetchProducts = async ({ queryKey }) => {
  const [, { category, query, page, token }] = queryKey;

  const params = category === "search" ? { productName: query, page, limit: 9 } : { categoryName: category, page, limit: 9 };

  const response = await axios.get(
    `https://backend-final-1-1-bkpd.onrender.com/api/products`,
    {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

const ProductList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || ""; 

  const [page, setPage] = useState(1);

  const token = localStorage.getItem("token")?.replace(/^"|"$/g, "");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", { category, query: searchQuery, page, token }],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  const handleChange = (event, value) => {
    setPage(value);
    navigate(`/${category}?query=${searchQuery}&page=${value}`);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" color="error">
          Error: {error.message}
        </Typography>
      </Box>
    );
  }

  const { data: products, pagination } = data;
  const { totalPages } = pagination;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          backgroundColor: "var(--button-bg-color)",
          flexDirection: "column",
          padding: "15px 25px",
          width: "100%",
          maxWidth: "1360px",
          boxSizing: "border-box",
        }}
      >
        <AnnouncmentsHero />
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gap: "40px",
            gridTemplateColumns: "repeat(auto-fill, minmax(286px, 1fr))",
          }}
        >
          {products.map((product) => (
            <ProductsCard
              key={product.id}
              id={product.id}
              name={product.name}
              img={product.imageUrl}
              price={product.price}
              description={product.description}
              category={product.categoryName}
            />
          ))}
        </Box>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
          shape="rounded"
          variant="outlined"
          sx={{ mx: "auto", mt: 4 }}
        />
      </Box>
    </Box>
  );
};

export default ProductList;
