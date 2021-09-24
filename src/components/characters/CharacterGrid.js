import React from "react";

const CharacterGrid = (props) => {
  if (props.isLoading) {
    return <h1> Loading...</h1>;
  }

  return (
    <section className="cards">
      {props.items.map((item) => (
        <h1 key={item.char_id}>{item.name}</h1>
      ))}
    </section>
  );
};

export default CharacterGrid;
