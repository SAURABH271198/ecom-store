"use client";

import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Text Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Welcome to E-Store
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ mb: 4, color: "grey.200" }}
            >
              Discover the latest products at the best prices. Shop your
              favorite categories with just one click.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" color="secondary" size="large">
                Shop Now
              </Button>
              <Button variant="outlined" color="inherit" size="large">
                Learn More
              </Button>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/500x400"
              alt="Hero Image"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
