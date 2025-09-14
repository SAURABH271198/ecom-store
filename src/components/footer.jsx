"use client";

import { Box, Container, Grid, Typography, Link as MuiLink, TextField, Button } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.900", color: "grey.300", py: 6, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="white" fontWeight="bold">
              E-Store
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Your one-stop shop for the best products online.
            </Typography>
          </Grid>

          {/* Shop Links */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" color="white" fontWeight="bold">
              Shop
            </Typography>
            <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/products" passHref>
                <MuiLink underline="hover" color="inherit">
                  Products
                </MuiLink>
              </Link>
              <Link href="/categories" passHref>
                <MuiLink underline="hover" color="inherit">
                  Categories
                </MuiLink>
              </Link>
              <Link href="/offers" passHref>
                <MuiLink underline="hover" color="inherit">
                  Offers
                </MuiLink>
              </Link>
              <Link href="/new-arrivals" passHref>
                <MuiLink underline="hover" color="inherit">
                  New Arrivals
                </MuiLink>
              </Link>
            </Box>
          </Grid>

          {/* Support Links */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" color="white" fontWeight="bold">
              Support
            </Typography>
            <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/faq" passHref>
                <MuiLink underline="hover" color="inherit">
                  FAQ
                </MuiLink>
              </Link>
              <Link href="/contact" passHref>
                <MuiLink underline="hover" color="inherit">
                  Contact Us
                </MuiLink>
              </Link>
              <Link href="/returns" passHref>
                <MuiLink underline="hover" color="inherit">
                  Returns
                </MuiLink>
              </Link>
              <Link href="/shipping" passHref>
                <MuiLink underline="hover" color="inherit">
                  Shipping Info
                </MuiLink>
              </Link>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" color="white" fontWeight="bold">
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Subscribe to get special offers and updates.
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <TextField size="small" variant="outlined" placeholder="Enter your email" fullWidth />
              <Button variant="contained" color="error">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box sx={{ borderTop: "1px solid #444", mt: 6, pt: 2, display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Typography variant="body2">© {new Date().getFullYear()} E-Store. All rights reserved.</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/privacy" passHref>
              <MuiLink underline="hover" color="inherit">
                Privacy Policy
              </MuiLink>
            </Link>
            <Link href="/terms" passHref>
              <MuiLink underline="hover" color="inherit">
                Terms of Service
              </MuiLink>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
