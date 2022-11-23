import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [print, setPrint] = useState("");
  const [loading, setLoading] = useState(false);

  const loader = () => {
    console.log(loading);
    return loading === true ? <p>Loading ...</p> : "";
  };

  document.title = "Gif Searcher";
  const fetchGif = async () => {
    const gif = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=AFkVcLnDM8r6ki73bSr1mh0kLpOlDN5C&q=${print}&limit=25&offset=0&rating=g&lang=en`
    );
    console.log(gif, "gif");
    setPosts(gif);
  };

  useEffect(() => {
    const reqInterceptor = (request) => {
      setLoading(true);
      return request;
    };

    const pendInterceptor = axios.interceptors.request.use(
      reqInterceptor,
      (err) => console.log("error")
    );

    const resInterceptor = (response) => {
      return response.data.data;
    };
    const interceptor = axios.interceptors.response.use(
      resInterceptor,
      (err) => {
        console.log("error");
      }
    );
    setLoading(false);
    return () =>
      axios.interceptors.response.eject(interceptor, pendInterceptor);
  }, []);
  return (
    <div className="App" style={{ marginTop: "1vh", gap: " 2vh" }}>
      <div>
        <input type={"search"} onChange={(e) => setPrint(e.target.value)} />
        <button
          onClick={() => {
            fetchGif();
          }}
        >
          Search
        </button>
      </div>
      <div>
        {loading === true
          ? {}
          : posts?.map((post) => {
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

export const GifPrinter = ({ post, index }) => (
  <div style={{ display: "flex", gap: "10px" }}>
    <p>{index}</p>
    <p>{post.title}</p>
    <img src={post.bitly_url} style={{ width: "150px", height: "150px" }} />
    <div>{post.bitly_url}</div>
  </div>
);

export default App;
