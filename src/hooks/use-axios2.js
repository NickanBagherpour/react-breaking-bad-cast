import {  useCallback, useReducer } from "react";

import api from "../components/services/api";

const ACTIONS = {
  CALL_API: "call-api",
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
  PENDING: "pending",
};

const userDetailsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING: {
      // console.log(ACTIONS.LOADING);

      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONS.SUCCESS: {
      // console.log(ACTIONS.SUCCESS);

      let results;
      let result;

      if (Array.isArray(action.data)) {
        results = [...action.data];
        result = null;
      } else {
        results = [];
        result = { ...action.data };
      }
      return {
        ...state,
        loading: false,
        result: result,
        results: action.data,
      };
    }
    case ACTIONS.ERROR: {
      // console.log(ACTIONS.ERROR);

      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  }
};

const initialState = {
  results: [],
  result: {},
  pending: false,
  loading: false,
  error: null,
};

const useAxios2 = () => {
  const [state, dispatch] = useReducer(userDetailsReducer, initialState);
  const { results, result, pending, loading, error } = state;

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // console.log("useAxios");

  const request = useCallback(async (requestConfig, applyData) => {
    dispatch({ type: ACTIONS.LOADING });

    // setIsLoading(true);
    // setError(null);
    try {
      const response = await api(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (response.status !== 200) {
        throw new Error(response.error || "Request failed!");
      }

      const data = await response.data;
      dispatch({ type: ACTIONS.SUCCESS, data: response.data });

      applyData(data);
    } catch (err) {
      // setError(err.error || err.message || "Something went wrong!");
      dispatch({
        type: ACTIONS.ERROR,
        error: err.error || err.message || "Something went wrong!",
      });
    }
    // setIsLoading(false);
  }, []);

  return {
    loading,
    error,
    request,
    result,
    results,
  };
};

export default useAxios;
