import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, handleLike}) {
  const toyCards = toys.map(toy => <ToyCard handleLike={handleLike} handleDelete={handleDelete} key={toy.id} toy={toy} />)
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
