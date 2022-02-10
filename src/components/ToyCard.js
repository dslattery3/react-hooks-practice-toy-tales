import React from "react";

function ToyCard({toy, handleDelete, handleLike}) {
  const handleClick = () => {
    handleDelete(toy.id)
  }

  const iLikeIt = () => {
    handleLike(toy)
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={iLikeIt}className="like-btn">Like 💖</button>
      <button onClick={handleClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
