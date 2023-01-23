import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Client = () => {
  const { id } = useParams();

  useEffect(() => {
    const GoLink = async () => {
      if (id) {
        const token = Cookies.get("token");
        try {
          const { data } = await axios.post(
            `http://localhost:8800/link/${id}`,
            {
              token: token,
            }
          );
          window.location.href = data[0].original;
        } catch (error) {
          console.log(error);
        }
      }
    };
    GoLink();
  }, [id]);
  return <></>;
};
