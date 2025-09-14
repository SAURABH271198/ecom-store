"use client";

import { Suspense } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import ProductCard from "../../components/products/ProductCard";
import Loader from "../loader";

const getProducts = async () => {
  try {
    const resp = await fetch("https://fakestoreapi.com/products?limit=12");
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function ProductListing() {
  const products = await getProducts();

  return (
    <Suspense fallback={<Loader />}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Title */}
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Products
        </Typography>

        {/* Products Grid */}
        <Box mt={6}>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Suspense>
  );
}
