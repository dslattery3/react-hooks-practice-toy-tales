import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const url = 'http://localhost:3001/toys/'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(url).then(r=>r.json()).then(setToys)
  }, [])
  
  const handleDelete = (toyId) => {
    const newToys = [...toys]
    const index = newToys.findIndex(toy => toy.id === toyId)
    newToys.splice(index, 1)
    
    fetch(url + toyId, {
      method: 'DELETE'
    })
    setToys(newToys)
  }

  const handleLike = (likedToy) => {
    console.log('liked', likedToy)
    const likeCount = likedToy.likes + 1
    const newToys = toys.map(toy => {
      if (toy.id === likedToy.id){
        toy.likes++
      }
      return toy
    })

    fetch(url + likedToy.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: likeCount})
    })
    setToys(newToys)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys={setToys} /> : null} 
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleLike={handleLike} handleDelete={handleDelete} toys={toys} />
    </>
  );
}

export default App;
