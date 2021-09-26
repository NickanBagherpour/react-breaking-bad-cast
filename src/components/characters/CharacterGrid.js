import React from "react";

import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
import ApiError from "../ui/ApiError";

const CharacterGrid = (props) => {
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

  if (props.items.length == 0) {
    return (
      <div className="">
        <h2 className="center">No data found. search some thing else !</h2>
      </div>
    );
  }

  return (
    <section className="cards">
      {props.items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
