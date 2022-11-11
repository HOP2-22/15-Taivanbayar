import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import axios from "axios";
import Loading from "../components/Loading";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e0d6642c1f665f684f489" },
});

export const AllCard = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        setLoading(true);
        const res = await instance.get("/");
        setPost(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    setLoading(false);
    fetchPosts();
  }, []);
  return (
    <Grid spacing={4} container>
      {
        post?.map((el) => {
          return (
            <Grid item sm={12} xs={12} md={6} xl={4}>
              <Card
                name={el.owner.firstName + " " + el.owner.lastName}
                caption={el.text}
                avatar={el.owner.picture}
                comment={"lorem"}
                image={el.image}
              />
            </Grid>
          );
        })
      }
    </Grid>
  );
};
