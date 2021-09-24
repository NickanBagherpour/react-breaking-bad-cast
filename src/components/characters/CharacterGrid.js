import React from "react";

import CharacterItem from "./CharacterItem";

const CharacterGrid = (props) => {
  if (props.isLoading) {
    return <h1> Loading...</h1>;
  }

  return (
    <section className="cards">
      {props.items.map((item) => (
        <CharacterItem key={item.char_id} item={item}/>
      ))}
    </section>
  );
};

export default CharacterGrid;
