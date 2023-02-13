import {
  Box,
  Button,
  Container,
  Input,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import Logo from "../assets/images/logo-default.svg";
import { LinkList } from "../components/LinkList";
import { useContext, useState } from "react";
import { FuncContext } from "../context/functions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AllLinks } from "../components/AllLinks";

export const Home = () => {
  const { linkTransfer, value, setValue, arr, setPage, history, countPag } =
    useContext(FuncContext);
    const [disable, setDisable] = useState(false);
    console.log(history)
  return (
    <Container sx={style.designHome} maxWidth="xl">
      <img src={Logo} alt="logo" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1vw",
          }}
        >
          <Input
            disableUnderline={true}
            type="email"
            placeholder="https://www.web-huudas.mn"
            style={style.inputHome}
            value={value}
            onChange={(e) => {
              e.preventDefault();
              setValue(e.target.value);
            }}
          />
          <Button
            variant="contained"
            style={style.buttonHome}
            onClick={() => {
              linkTransfer();
            }}
          >
            Богиносгох
          </Button>
        </Box>
        {arr ? <LinkList list={arr} /> : null}
        {history && (
          <Box display={"flex"} flexDirection="column" alignItems={"center"} gap={2}>
            {history?.map((el, index) => {
              return <AllLinks key={index} list={el} index={index} />;
            })}
            <Stack spacing={2}>
              <Pagination
                count={countPag}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
                hideNextButton={disable}
                onChange={(e, value) => {
                  setPage(value);
                  setDisable(value === countPag)
                }}
              />
            </Stack>
          </Box>
        )}
      </Box>
    </Container>
  );
};
const style = {
  inputHome: {
    width: "40vw",
    height: "4vh",
    background: "#FFFFFF",
    border: "1px solid #F0F0F0",
    boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
    borderRadius: `100px`,
    paddingLeft: "15px",
  },
  designHome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3vh",
  },
  buttonHome: {
    backgroundColor: " #02B589",
    borderRadius: "100px",
    padding: "3px 33px 3px 33px",
    fontSize: "90%",
  },
};
