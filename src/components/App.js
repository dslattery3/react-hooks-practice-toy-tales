import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [isDelete, setIsDelete] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(toyArray => setToys(toyArray));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleDelete(toyId){
    const newToys = [...toys]
    const index = newToys.findIndex(toy => toy.id === toyId) 
    newToys.splice(index, 1)
    setToys(newToys)
  }
  function onAddToy(newToy) {
    setToys([...toys, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={onAddToy}  /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleDelete={handleDelete} setToys={setToys} toys={toys}/>
    </>
  );
}

export default App;
