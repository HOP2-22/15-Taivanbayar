import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Client = () => {
  const { id } = useParams();

  useEffect(() => {
    const GoLink = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8800/${id}`);
        window.location.href = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    GoLink();
  }, [id]);
};
export default Client;
