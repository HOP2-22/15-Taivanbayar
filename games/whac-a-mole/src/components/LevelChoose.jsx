import { Box } from "@mui/system";

export const LevelChooser = ({ setLevel }) => {
  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "#B40000",
        }}
      >
        Level:
      </h1>
      <select
        autoFocus="autoFocus"
        style={{
          width: "100px",
          height: "5vh",
          backgroundColor: "#B40000",
          color: "#FFFFFF",
          fontWeight: "bolder",
          border: "none",
          fontSize: "32px",
        }}
      >
        <option value={"easy"} selected onClick={() => setLevel(false)}>
          Easy
        </option>
        <option value={"medium"} onClick={() => setLevel(true)}>
          Medium
        </option>
        <option value={"hard"} onClick={() => setLevel(null)}>
          Hard
        </option>
      </select>
    </Box>
  );
};
