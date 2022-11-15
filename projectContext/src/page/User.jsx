import React, { useEffect, useContext, useState } from "react";
import "../App.css";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { ColorModeContext } from "../context/ThemeContext";
import CommentPrinter from "../components/CommentPrint";
import { Typography } from "@mui/material";

export const UserShow = () => {
  const { instance, theme, color } = useContext(ColorModeContext);
  const [postDetails, setPostDetails] = useState();
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await instance.get(`/${id}`);
        setPostDetails(res?.data);
      } catch (error) {
        setPostDetails("Sorry, Page isn't working properly");
      }
    };
    fetchPosts();
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: theme,
      }}
    >
      <Box sx={style.containerStyle}>
        <Typography
          sx={{
            color: color,
            fontSize: "50px",
            width: "50vw",
            textAlign: "center",
          }}
        >
          {postDetails?.text}{" "}
        </Typography>
        <Box sx={style.description}>
          <img src={postDetails?.owner.picture} style={style.avatarImage} />
          <Typography
            sx={{
              color: color,
            }}
          >
            {postDetails?.owner.firstName + " " + postDetails?.owner.lastName}
          </Typography>
          <Box style={style.upLine}></Box>
          <Typography
            sx={{
              color: color,
            }}
          >
            15nd November, 2022
          </Typography>
        </Box>
        <img
          src={postDetails?.image}
          alt="avatarImage"
          style={style.mainImage}
        />

        <Typography
          sx={{
            color: color,
            width: "50vw",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
          voluptatum modi aliquam animi vitae officia labore optio inventore
          quo, fuga vero voluptatibus est temporibus veniam, repellat at earum
          totam! Officia!
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          atque doloremque quae sint perferendis culpa, ipsum delectus porro
          tempore iste vero vel velit nobis maiores dicta libero ipsam veniam!
          At!
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          voluptates maiores dicta velit esse aperiam quos labore repellendus
          blanditiis doloribus magnam incidunt autem consectetur culpa
          molestias. A suscipit numquam facilis!
        </Typography>

        <Box sx={style.writerDescription}>
          <img src={postDetails?.owner.picture} style={style.avatarImage} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: color,
                fontSize: "12px",
              }}
            >
              Written by
            </Typography>
            <Typography
              sx={{
                color: color,
              }}
            >
              {postDetails?.owner.firstName + " " + postDetails?.owner.lastName}
            </Typography>
            <Typography sx={style.writerMajor}>CEO team app</Typography>
          </Box>
        </Box>

        <Box sx={style.endLine}></Box>

        <Box className="comment-section-input" sx={style.commentSection}>
          <Box>
            {output.map((el, index) => {
              return (
                <CommentPrinter
                  key={index}
                  el={el}
                  output={output}
                  setOutput={setOutput}
                  index={index}
                />
              );
            })}
          </Box>

          <Typography sx={style.captionInput}>Join the conversation</Typography>
          <Box className="input-section" sx={style.inputSection}>
            <img src={postDetails?.owner.picture} style={style.avatarImage} />
            <input
              type={"text"}
              placeholder="Comments"
              style={style.inputStyle}
              value={inputValue}
              onChange={(el) => {
                el.preventDefault();
                setInputValue(el.target.value);
              }}
              onKeyDown={(e) => {
                console.log(e);
                if (e.code === "Enter") {
                  setOutput([...output, inputValue]);
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const style = {
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "10vh",
    alignItems: "center",
    justifyContent: "center",
    gap: "6vh",
  },
  description: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "2vw",
    alignItems: "center",
  },
  upLine: {
    height: "2vh",
    width: "1px",
    backgroundColor: "#BBC8D4",
  },
  mainImage: {
    width: "55vw",
    height: "50vh",
    marginTop: "4vh",
  },
  writerDescription: {
    display: "flex",
    gap: "1vw",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "50vw",
  },
  writerMajor: {
    color: "#989898",
    fontWeight: "lighter",
    fontSize: "14px",
  },
  endLine: {
    width: "50%",
    height: "1px",
    backgroundColor: "#BBC8D4",
  },
  commentSection: {
    display: "flex",
    flexDirection: "column",
    gap: "5vh",
    paddingBottom: "13vh",
    width: "50vw",
  },
  captionInput: {
    color: "#6D7D8B",
    fontSize: "19px",
    marginBottom: "-4vh",
  },
  inputSection: {
    display: "flex",
    gap: "1vw",
    justifyContent: "flex-start",
  },

  inputStyle: {
    width: "40vw",
    height: "15vh",
    borderRadius: "5px",
  },
  avatarImage: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  },
};

export default UserShow;
