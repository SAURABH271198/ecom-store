"use client";

import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinks = [
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.label}>
            <Link href={item.href} style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary={item.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            href="/"
            style={{ textDecoration: "none", color: "inherit", fontWeight: "bold" }}
          >
            E-Store
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          {/* Right Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button component={Link} href="/login" color="inherit">
              Login
            </Button>
            <IconButton component={Link} href="/cart" color="inherit">
              <Badge badgeContent={2} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {/* Mobile Menu */}
            <IconButton sx={{ display: { md: "none" } }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
