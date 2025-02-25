import React, { useState } from 'react';

const BgChange = () => {
  const [backgroundColor, setBackgroundColor] = useState("yellow");

  const handleClick = () => {
    // Toggle between yellow and red
    const newColor = backgroundColor === "yellow" ? "red" : "yellow";
    setBackgroundColor(newColor); // Update the state
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        width: '200px',
        height: '200px',
        cursor: 'pointer',
      }}
    >
      Click
    </div>
  );
};

export default BgChange;
