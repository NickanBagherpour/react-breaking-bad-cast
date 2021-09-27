import React from "react";

import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
import ApiError from "../ui/ApiError";

const CharacterGrid = (props) => {


  const transformResults = (itemResult) => {
        const loadedItems = [];
  
        // console.log(itemResult);
  
        for (let item of itemResult) {
          loadedItems.push({
            id: item.char_id,
            name: item.name,
            nickname: item.nickname,
            img: item.img,
            portrayed: item.portrayed,
            status: item.status,
            birthday: item.birthday,
          });
        }

        return loadedItems;
  
        // setItems(loadedItems);
  
        // setItems(itemResult);
      };




  if (props.isLoading) {
    return <Spinner />;
  }

  if (props.error) {
    return (
      <ApiError
        error={props.error}
        onClick={props.fetchItems}
        buttonTitle={"Try Again"}
      />
    );
  }

  if (props.items.length === 0) {
    return (
      <div>
        <h2 className="center">No data found. search some thing else !</h2>
      </div>
    );
  }


  const items = transformResults(props.items);


  return (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
