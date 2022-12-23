import { Box } from "@mui/material";

export const TemplateChooser = ({ setTemplater, templater }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#B40000" }}>Template: </h1>
      <select
        style={{
          width: "100px",
          height: "5vh",
          backgroundColor: "#B40000",
          color: "#FFFFFF",
          fontWeight: "bolder",
          border: "none",
          fontSize: "32px",
        }}
        onChange={(e) => {
          console.log(e.target.value);
          setTemplater({
            a: Number(e.target.value[0]),
            b: Number(e.target.value[2]),
          });
          console.log(templater);
        }}
      >
        <option value={"3x3"}>3x3</option>
        <option value={"3x5"} selected>
          3x5
        </option>
        <option value={"4x5"}>4x5</option>
      </select>
    </Box>
  );
};
