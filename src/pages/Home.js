import React, { useState, useEffect } from "react";

import useHttp from "../hooks/use-http";
import useAxios from "../hooks/use-axios";
import Search from "../components/ui/Search";

import CharacterGrid from "../components/characters/CharacterGrid";
import Layout from "../components/ui/Layout";

const Home = () => {

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    // const { isLoading, error, request: fetchItems } = useHttp();
    const { isLoading, error, request: fetchItems } = useAxios();
  
    useEffect(() => {
      const transformResults = (itemResult) => {
        const loadedItems = [];
  
        // console.log(itemResult);
  
        for (let item of itemResult) {
          loadedItems.push({
            char_id: item.char_id,
            name: item.name,
            nickname: item.nickname,
            img: item.img,
            portrayed: item.portrayed,
            status: item.status,
            birthday: item.birthday,
          });
        }
  
        setItems(loadedItems);
  
        // setItems(itemResult);
      };
  
      fetchItems(
        { url: `characters?name=${query}` },
        transformResults
      );
    }, [fetchItems, query]);
  
    const getQueryHandler = (q) => {
      setQuery(q);
    };


  return (
    <Layout>
        <Search getQuery={getQueryHandler} />
        <CharacterGrid
          isLoading={isLoading}
          error={error}
          items={items}
          fetchItems={fetchItems}
        />
    </Layout>
  );
};

export default Home;
