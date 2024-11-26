import axios from "axios";
import { useEffect, useState } from "react";
import { IPizza } from "../types/pizza";
axios.defaults.baseURL = "http://localhost:3000/";

export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState<IPizza[] | []>([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async (params) => {
    try {
      // console.log("entrou");
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
      console.log("loading", loading);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
    console.log("loading", loading);
  }, []); // execute once only

  return { response, error, loading };
};
