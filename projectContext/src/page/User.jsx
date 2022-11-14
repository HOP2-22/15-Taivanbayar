import React, { useEffect, useContext, useState } from "react";
import "../App.css";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { ColorModeContext } from "../context/ThemeContext";
import CommentPrinter from "../components/CommentPrint";

export const UserShow = () => {
  const { instance } = useContext(ColorModeContext);
  const [postDetails, setPostDetails] = useState();
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await instance.get(`/${id}`);
        setPostDetails(res?.data);
      } catch (error) {}
    };
    fetchPosts();
  }, [id]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={postDetails?.image}
        alt="avatarImage"
        style={{
          width: "55vw",
          height: "80vh",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10vh",
          alignItems: "center",
          gap: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1vw",
            flexDirection: "column",
          }}
        >
          <p>{postDetails?.text}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={postDetails?.owner.picture}
              style={{ borderRadius: "50%" }}
            />
            <div style={{ display: "block" }}>
              <p style={{ fontWeight: "300" }}>written by</p>
              <p>
                {postDetails?.owner.firstName +
                  " " +
                  postDetails?.owner.lastName}
              </p>
            </div>
          </div>
        </div>
        <div className="comment-section-input">
          <div>
            {output.map((el, index) => {
              return (
                <CommentPrinter
                  key={index}
                  el={el}
                  output={output}
                  setOutput={setOutput}
                />
              );
            })}
          </div>
          <input
            type={"text"}
            placeholder={"Write Your Thoughts"}
            style={style.inputStyle}
            value={inputValue}
            onChange={(el) => {
              el.preventDefault();
              setInputValue(el.target.value);
            }}
            onKeyDown={(e) => {
                console.log(e)
              if(e.code === "Enter"){
                setOutput([...output, inputValue]);
              }
            }}
          />
        </div>
        
      </Box>
    </Box>
  );
};

const style = {
  inputStyle: {
    width: "50vw",
    height: "15vh",
    borderRadius: "5px",
  },
};

export default UserShow;
