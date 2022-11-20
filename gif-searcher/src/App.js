import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPost] = useState();

  const gitContainer = axios.create({
    baseURL:
      "https://api.giphy.com/v1/stickers/search?api_key=AFkVcLnDM8r6ki73bSr1mh0kLpOlDN5C&q=2&limit=25&offset=0&rating=g&lang=en",
  });

  useEffect(() => {
    const fetchGif = async () => {
      try {
        const gif = await gitContainer.get("/");
        setPost(gif.data.data);
        console.log(gif.data.data);
      } catch (error) {
        setPost("Page isn't working properly");
      }
    };
    fetchGif();
  }, []);

  return (
    <div className="App">
      <input type={"search"} />
      {posts?.map((post, index) => {
        return <GifPrinter post={post} index={index} />;
      })}
    </div>
  );
}

export const GifPrinter = ({ post, index }) => (
  <div style={{ display: "flex", gap:"10px" }}>
    <p>{index}</p>
    <p>{post.title}</p>
    <img src={post.bitly_url} style={{width:"150px", height:"150px"}}/>
    <div>
    {post.bitly_url}
    </div>
  </div>
);

export default App;
