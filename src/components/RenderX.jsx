import React from "react";
import './RenderX.css'; // Import the CSS file

const RenderX = () => {
  const greeting = "Hello, World!";
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      {/* Rendering a single element */}
      <h1>{greeting}</h1>

      {/* Rendering a list */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default RenderX;
