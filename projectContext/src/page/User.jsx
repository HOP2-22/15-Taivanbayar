import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const UserShow  = (props) => {
    const {name, caption, avatar, comment, image} = props;
    return (
        <Box>
            <Box>
                {image}
            </Box>
            <Typography>
                {comment}
            </Typography>
        </Box>
)
} 

export default UserShow;