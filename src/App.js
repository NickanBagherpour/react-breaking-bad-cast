import React, { useState, useEffect } from "react";

import useHttp from "./hooks/use-http";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import Footer from "./components/ui/Footer";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const { isLoading, error, sendRequest: fetchItems } = useHttp();

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
      { url: `https://www.breakingbadapi.com/api/characters?name=${query}` },
      transformResults
    );
  }, [fetchItems, query]);

  const getQueryHandler = (q) => {
    setQuery(q);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={getQueryHandler} />
      <CharacterGrid isLoading={isLoading} error={error} items={items} fetchItems={fetchItems} />
      <Footer />
    </div>
  );
};

export default App;
