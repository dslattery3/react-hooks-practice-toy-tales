import React, {useState} from "react";

function ToyForm({setToys}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()
    const newToy = {
      name: name,
      image: image
    }
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newToy)
    }).then(r=>r.json()).then((freshToy) => {
        setToys((toys) => {
          const newToys = [...toys, freshToy]
          return newToys
        })
    })
    
  }
  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)} className="add-toy-form" >
        <h3>Create a toy!</h3>
        <input onChange={e => setName(e.target.value) }
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input onChange={e => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
