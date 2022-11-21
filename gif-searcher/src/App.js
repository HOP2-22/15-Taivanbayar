import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPost] = useState([]);
  const [print, setPrint] = useState("");

  useEffect(() => {
    console.log(print);
    const gitContainer = axios.create({
      baseURL: `https://api.giphy.com/v1/gifs/search?api_key=AFkVcLnDM8r6ki73bSr1mh0kLpOlDN5C&q=${print}&limit=25&offset=0&rating=g&lang=en`,
    });
    const fetchGif = async () => {
      try {
        const gif = await gitContainer.get("/");
        setPost(gif.data.data);
      } catch (error) {
        setPost("Page isn't working properly");
      }
    };
    fetchGif();
  }, [print]);

  console.log(posts);
  return (
    <div
      className="App"
      style={{ marginTop: "1vh", gap: " 2vh"}}
    >
      <div>
      <input
        type={"search"}
        onChange={(e) => {
          e.preventDefault();
          setPrint(e.target.value);
        }}
        />
        </div>
      <div  >
          {posts?.map((post) => {
            return (
              <div>
                <p>{post.title}</p>
                <img src={post.images.fixed_height.url} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
