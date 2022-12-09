import { Box } from "@mui/system"

export const LevelChooser = ({setLevel}) => {
    return(
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          Level:
        </h1>
        <select
          autoFocus="autoFocus"
          style={{
            width: "100%",
            height: "5vh",
            backgroundColor: "#B40000",
            color: "#FFFFFF",
            fontWeight: "bolder",
            border: "none",
            fontSize: "32px",
          }}
        >
          <option value={"easy"} selected onClick={() => setLevel("easy")}>
            Easy
          </option>
          <option value={"medium"} onClick={() => setLevel("medium")}>
            Medium
          </option>
          <option value={"hard"} onClick={() => setLevel("hard")}>
            Hard
          </option>
        </select>
      </Box>
    )
}