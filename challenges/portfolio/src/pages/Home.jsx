import { Box, Container } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Banner } from "../components/Banner";
import { ProfileComponent } from "../components/ProfileSection";
import { PersonalInfo } from "../components/Personalinfo";
import { motion } from "framer-motion";

import { chakra, shouldForwardProp } from "@chakra-ui/react";

export const Home = () => {
  const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
      return shouldForwardProp(prop) || prop === "transition";
    },
  });
  const { dark } = useContext(DataContext);
  return (
    <Box
      sx={{
        backgroundColor: !dark ? "#F0E6DB" : "#202023",
      }}
    >
      <Container maxWidth="sm" display="flex" flexDirection="column" gap="2vh">
        <StyledDiv
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          mb={6}
        >
          <Box width="100%" height="45vh">
            <Banner />
          </Box>
          <ProfileComponent />
          <PersonalInfo Work={true} />
          <PersonalInfo Bio={true} />
          <PersonalInfo Hobbies={true} />
          <PersonalInfo Projects={true} />
          <PersonalInfo Web={true} />
        </StyledDiv>
      </Container>
    </Box>
  );
};
