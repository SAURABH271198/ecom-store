"use client";

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Rating,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.image || "https://via.placeholder.com/300x200"}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />

      {/* Product Info */}
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          noWrap
          title={product.title}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Rating
            name="product-rating"
            value={product.rating?.rate || 0}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            ({product.rating?.count || 0})
          </Typography>
        </Box>

        {/* Price */}
        <Typography
          variant="h6"
          color="success.main"
          sx={{ mt: 1, fontWeight: "bold" }}
        >
          ₹{product.price}
        </Typography>
      </CardContent>

      {/* Add to Cart Button */}
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ fontWeight: "bold" }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
