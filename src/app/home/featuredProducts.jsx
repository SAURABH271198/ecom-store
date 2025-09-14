"use client";

import React from "react";
import ProductCard from "../../components/products/ProductCard";
import { Grid, Typography, Box } from "@mui/material";

export default async function FeaturedProductsPage() {
  const resp = await fetch("https://fakestoreapi.com/products?limit=6", {
    cache: "no-store", // ensures fresh SSR render
  });
  const products = await resp.json();

  return (
    <Box sx={{ width: "100%", px: { xs: 2, md: 6 }, py: 6 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Featured Products
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
