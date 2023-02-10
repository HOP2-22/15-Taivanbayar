import { Box, Typography, SvgIcon, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

export const Contact = () => (
  <Box display="flex" flexDirection="column" gap="3vh" pl={3}>
    <Link
      display="flex"
      gap="7px"
      sx={{
        ":hover": {
          textDecoration: "underline 2px solid #80E5D8",
          cursor: "pointer",
        },
      }}
      href="https://github.com/Taivnaa032"
      target="_blank"
      rel="noreferrer"
      underline="none"
    >
      <SvgIcon component={GitHubIcon}></SvgIcon>
      <Typography>@Taivnaa032</Typography>
    </Link>
    <Link
      display="flex"
      gap="7px" 
      sx={{
        ":hover": {
          textDecoration: "underline 2px solid #80E5D8",
          cursor: "pointer",
        },
      }}
      href="https://www.instagram.com/taivnaajoestar/"
      target="_blank"
      rel="noreferrer"
      underline="none"
    >
      <SvgIcon component={InstagramIcon}></SvgIcon>
      <Typography>@taivnaajoestar</Typography>
    </Link>
    <Link
      display="flex"
      gap="7px"
      sx={{ 
        ":hover": {
          textDecoration: "underline 2px solid #80E5D8",
          cursor: "pointer",
        },
      }}
      underline="none"
    >
      <SvgIcon component={MailIcon}></SvgIcon>
      <Typography>@etaivnaa032@gmail.com</Typography>
    </Link>
  </Box>
);
