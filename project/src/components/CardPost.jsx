import React, { useEffect, useState, useContext } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { ColorModeContext } from "../context/ThemeContext";

export const AllCard = () => {
  
  const {instance} = useContext(ColorModeContext)
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await instance.get("/");
        setPost(res.data.data);
      } catch (error) {
        setPost("Page isn't working")
      }
    };
    fetchPosts();
  }, []);
  return (
    <Grid spacing={4} container>
      {post?.map((el) => {
        return (
          <Grid item sm={12} xs={12} md={6} xl={4}>
            <Card
              name={el.owner.firstName + " " + el.owner.lastName}
              caption={el.text}
              avatar={el.owner.picture}
              comment={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, voluptatibus commodi? Perspiciatis aut magnam non quis aliquam, dicta nobis iste voluptatibus corrupti libero deserunt itaque, minus quisquam explicabo repellat ducimus"
              }
              image={el.image}
              id={el.id}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
