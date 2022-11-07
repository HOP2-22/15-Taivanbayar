import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";

export function MediaCad(props) {
  const { name, avatar, comment, caption } = props;

  return (
    <Card
      sx={{
        borderRadius: "5%",
        height: 460,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          {caption}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {comment}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", gap: "20px" }}>
        <Avatar alt="avatar" src={avatar} />
        <Typography sx={{ color: "#6D7D8B" }}>{name}</Typography>
        <Typography sx={{ color: "#6D7D8B" }}>2nd January, 2022</Typography>
      </CardActions>
    </Card>
  );
}
