import React, { useEffect, useState, useContext } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import Card from "./Card";
import { ColorModeContext } from "../context/ThemeContext";

export const AllCard = () => {
  const { instance, color } = useContext(ColorModeContext);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async (req, res) => {
      setLoading(true);
      try {
        const res = await instance.get("/");
        setPost(res.data.data);
      } catch (error) {
        setPost("Page isn't working");
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  return (
    <Grid spacing={4} container>
      {loading ? (
        <CircularProgress width="900px" height="900px" />
      ) : (
        post?.map((el) => {
          return (
            <Grid item sm={12} xs={12} md={6} xl={4} key="">
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
        })
      )}
    </Grid>
  );
};
