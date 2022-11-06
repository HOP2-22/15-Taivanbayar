import React from "react";
import { Container, AppBar, Box, Typography } from "@mui/material";

export const Header = () => (
  <AppBar sx={{backgroundColor:"white"}}>
    <Container sx={{backgroundColor:"white"}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:"center"}}>
        <Typography 
        variant="h5"
        sx={{
            color:"black",
        }}>team.</Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography sx={{color:"gray"}}>Products</Typography>
          <Typography sx={{color:"gray"}}>Services</Typography>
          <Typography sx={{color:"gray"}}>Contact</Typography>
          <Typography sx={{color:"gray"}}>Log in</Typography>
          <Typography sx={{color:"gray"}}>Get Access</Typography>
        </Box>
      </Box>
    </Container>
  </AppBar> 
);

export default Header;
        