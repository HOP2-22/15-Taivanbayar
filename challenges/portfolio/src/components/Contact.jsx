import { Box, Typography, SvgIcon } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

export const Contact = () => (
  <Box display="flex" flexDirection="column" ml={3} gap="3vh">
    <Box display="flex" gap="7px">
      <SvgIcon component={GitHubIcon}></SvgIcon>
      <Typography>@Taivnaa032</Typography>
    </Box>
    <Box display="flex" gap="7px">
    <SvgIcon component={InstagramIcon} ></SvgIcon>
      <Typography>@taivnaajoestar</Typography>
    </Box>
    <Box display="flex" gap="7px">
    <SvgIcon component={MailIcon} ></SvgIcon>
      <Typography>@etaivnaa032@gmail.com</Typography>
    </Box>
  </Box>
);
