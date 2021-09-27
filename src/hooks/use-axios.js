import { useCallback, useReducer } from "react";

import api from "../services/api";

const ACTIONS = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
  PENDING: "pending",
};

const userDetailsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONS.SUCCESS: {
      let results;
      let result;

      if (Array.isArray(action.data)) {
        results = action.data;
        result = null;
      } else {
        results = [];
        result = { ...action.data };
      }
      return {
        ...state,
        loading: false,
        result: result,
        results: results,
      };
    }
    case ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default :
    return {};
  }
};

const initialState = {
  results: [],
  result: {},
  pending: false,
  loading: false,
  error: null,
};

const useAxios = () => {
  const [state, dispatch] = useReducer(userDetailsReducer, initialState);
  const { results, result, pending, loading, error } = state;

  const request = useCallback(async (requestConfig, applyData) => {
    dispatch({ type: ACTIONS.LOADING });

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

      console.log(data);
      dispatch({ type: ACTIONS.SUCCESS, data: data });

      if (applyData !== undefined) applyData(data);

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
    pending,
    loading,
    error,
    request,
    results,
    result,
  };
};

export default useAxios;
