import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export const LinkList = ({ list }) => {
    const [linkValue, setLinkValue] = useState(list.short)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10vh",
      }}
    >
      <Box>
        <Typography sx={{ color: "#000000", opacity: 0.5 }}>
          Өгөгдсөн холбоос:
        </Typography>
        <Typography>{list.original}</Typography>
      </Box>
      <Box> 
        <Typography sx={{ color: "#000000", opacity: 0.5 }}>
          Богино холбоос:
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2vw",
          }}
        >
          <Typography>{list.short}</Typography>
          <Link
            sx={{ color: "#02B589", cursor: "pointer" }}
            onClick={() => {
              navigator.clipboard.writeText(linkValue);
            }}
          >
            Хуулж авах
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
