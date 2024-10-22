import React from 'react';
import { useState } from 'react';
import './HooksANDstarte.css'; // Import the CSS file

const HooksANDstarte = () => {
  const [count, setCount] = useState(1); // Initialize count with 1

  return (
    <div className="container">
      <div className="count-display">This count is {count}</div> {/* Display the current count */}
      <button onClick={() => setCount(count + 1)}>Update Count</button> {/* Increment count on click */}
    </div>
  );
};

export default HooksANDstarte;
