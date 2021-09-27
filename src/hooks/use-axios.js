import { useState, useCallback } from "react";
import axios from "axios";
import api from "../components/services/api";

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {

      // const response = await axios(requestConfig.url, {
      //   method: requestConfig.method ? requestConfig.method : "GET",
      //   headers: requestConfig.headers ? requestConfig.headers : {},
      //   body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      // });
      const response = await api(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (response.status !== 200) {
        throw new Error(response.error || "Request failed!");
      }

      const data = await response.data;

      applyData(data);
    } catch (err) {
      setError(err.error || err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    request,
  };
};

export default useAxios;
