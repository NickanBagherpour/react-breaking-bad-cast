import { useState, useCallback } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (requestConfig, applyData) => {
    setLoading(true);
    setError(null);
    try {

       const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      console.log(err);
      setError(err.message || "Something went wrong!");
    }
    setLoading(false);
  }, []);

  return {
    loading,
    error,
    request,
  };
};

export default useHttp;
