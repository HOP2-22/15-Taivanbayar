import { Box, Typography } from "@mui/material"
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Profile from "../images/taivnaa.jpg";


export const ProfileComponent = () => {
    const { dark} = useContext(DataContext)
    return (
        <Box sx={styles.boxStyle}>
        <Typography
          sx={{
            color: dark ? "#F0E6DB" : "#202023",
            width: "80%",
            height: "10%",
            backgroundColor:  "rgba(255, 255, 255, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          Hello, I'm a Fullstack developer based in Mongolia
        </Typography>
        <Box sx={styles.containerStyle}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "700", color: dark ? " 	white" : "#000d1a" }}
            >
              Taivanbayar Erdenebaatar
            </Typography>
            <Typography sx={{ color: dark ? "white" : "#333300" }}>
              Space Cowboy (Developer)
            </Typography>
          </Box>
          <Box>
            <img src={Profile} alt="profile" style={styles.profileImg} />
          </Box>
        </Box>
      </Box>
    )
}
export const styles = {
    profileImg: {
      height: "110px",
      width: "110px",
      borderRadius: "50%",
      border: `2px solid white`,
      objectFit: "cover",
    },
    containerStyle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    boxStyle: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "column",
      gap: "3vh",
      marginTop: -24,
      position: "relative",
      zIndex: 1,
    }
}