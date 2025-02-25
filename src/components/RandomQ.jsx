import React, { useState } from 'react';

const RandomQ = () => {
  let quotes = [
    "Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Subscribe to Drop X Out"
  ];

  // Use useState to manage the current quote
  const [quote, setQuote] = useState(quotes[0]);

  // Function to handle quote change
  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <p>{quote}</p>
      <button onClick={changeQuote}>Get New Quote</button>
    </div>
  );
};

export default RandomQ;




// 2. Generate a Random Index:
// The transformation begins when a random number is generated between 0 and the length of the quotes array.

// Let’s break it down:

// Math.random() generates a random floating-point number between 0 and 1 (e.g., 0.5467).

// Multiply this by the length of the array (quotes.length, which is 5 in this case):

// js
// Copy code
// Math.random() * 5 = 0.5467 * 5 = 2.7335
// Using Math.floor(), this number is rounded down to an integer:

// js
// Copy code
// Math.floor(2.7335) = 2
// So, the randomIndex generated is 2.

// 3. Selecting the Quote: