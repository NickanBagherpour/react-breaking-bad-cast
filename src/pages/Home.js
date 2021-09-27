import React, { useState, useEffect } from "react";

import useAxios from "../hooks/use-axios";
import Search from "../components/ui/Search";
import CharacterGrid from "../components/characters/CharacterGrid";
import Layout from "../components/ui/Layout";

const Home = () => {
  const [query, setQuery] = useState("");
  // const { isLoading, error, request: fetchItems } = useHttp();
  const { loading, error, request: fetchItems,results } = useAxios();

  useEffect(() => {
    fetchItems({ url: `characters?name=${query}`});
  }, [fetchItems, query]);

  const getQueryHandler = (q) => {
    setQuery(q);
  };

  return (
    <Layout>
      <Search getQuery={getQueryHandler} />
      <CharacterGrid
        isLoading={loading}
        error={error}
        items={results}
        fetchItems={fetchItems}
      />
    </Layout>
  );
};

export default Home;
