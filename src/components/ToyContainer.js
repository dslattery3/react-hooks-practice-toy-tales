import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys, handleDelete }) {


  return (
    <div id="toy-collection">
      {toys && toys.map((toy, index) => {
        return <ToyCard deleteToy={handleDelete} key={index} name={toy.name} image={toy.image} likes={toy.likes} id={toy.id}/>
      })}
    </div>
  );
}

export default ToyContainer;
