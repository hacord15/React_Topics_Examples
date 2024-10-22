import React, { useState, useEffect } from 'react';
import './Exercise.css'; // Link to your CSS

const Exercise = () => {
  const [cards, setCards] = useState([]);
  const [showCards, setShowCards] = useState(false); // State to toggle card visibility

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowCards = () => {
    setShowCards(true); // Show cards when button is clicked
  };

  return (
    <div className="exercise-container">
      <button onClick={handleShowCards} className="show-cards-btn">Show Cards</button>
      
      {showCards && (  // Only display cards if showCards is true
        cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1 className="card-title">{card.title}</h1>
              <p className="card-body">{card.body}</p>
              <span className="card-user">By: UserId {card.userId}</span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Exercise;
