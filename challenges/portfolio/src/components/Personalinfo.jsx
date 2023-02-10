import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import BioText from "./Bio";
import { Contact } from "./Contact";
import ProjectsImages from "./Projects";

export const PersonalInfo = ({
  Work = false,
  Bio = false,
  Hobbies = false,
  Projects = false,
  Web = false,
}) => {
  const { dark } = useContext(DataContext);
  return (

      <Box display={"flex"} flexDirection={"column"} gap="2vh" mb={5} mt={Work && 3}>
        <Typography
          sx={{
            color: dark ? "white" : "black",
            textDecoration: "underline #525252 4px  solid",
            textUnderlinePosition: "under",
          }}
          variant="h5"
        >
          {Work && "Work"}
          {Bio && "Bio"}
          {Hobbies && "Hobbies"}
          {Projects && "Projects"}
          {Web && "On the Web"}
        </Typography>

        <Box color={dark ? "white" : "black"}>
          <Typography>
            {Work &&
              "Taivnaa is a full-stack developer based in Ulaanbaatar who studies and developes sites with passion for contributing to face the oncoming obstacles of software technology."}
          </Typography>
          {Bio && <BioText />}
          <Typography ml={3}>
            {Hobbies && "Movies, Science, Playing Basketball, Music, Books"}
          </Typography>
          {Projects && <ProjectsImages />}
          {Web && <Contact />}
        </Box>
      </Box>
  );
};
