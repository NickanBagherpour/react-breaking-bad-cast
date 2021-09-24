import React from "react";

import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = (props) => {
  if (props.isLoading) {
    return <Spinner/>;
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
