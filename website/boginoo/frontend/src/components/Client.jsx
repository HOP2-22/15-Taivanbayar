import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FuncContext } from "../context/functions";

export const Client = () => {
  // const { info } = useContext(FuncContext);
  const { id } = useParams();

  useEffect(() => {
    const GoLink = async () => {
      if (id) {
        const token = await localStorage.getItem("token");
        try {
          const {data} = await axios.post(`http://localhost:8800/link/${id}`, {
            token: token,
          });
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
