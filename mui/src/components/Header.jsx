import React from "react";
import { Container, AppBar, Box, Typography } from "@mui/material";

export const Header = () => (
  <AppBar>
    <Container sx={{backgroundColor:"white"}}>
      <Box sx={{ display: "flex", justifyContent: "space-between"}}>
        <Typography 
        variant="h5"
        sx={{
            color:"black",
        }}>team.</Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography>Products</Typography>
          <Typography>Services</Typography>
          <Typography>Contact</Typography>
          <Typography>Log in</Typography>
          <Typography>Get Access</Typography>
        </Box>
      </Box>
    </Container>
  </AppBar>
);

export default Header;
