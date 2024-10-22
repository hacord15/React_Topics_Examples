import React, { useState, useEffect } from 'react';



const UseEffectS = () => {
    const [color, setColor] = useState('white'); // Initialize the state for the color

    // Effect to change the background color and trigger alert on color change
    useEffect(() => {
        document.body.style.backgroundColor = color; // Change the background color

        // Alert the user about the color change
        alert(`Background color changed to ${color}`);

        // Clean up function to reset color on unmount
        return () => {
            document.body.style.backgroundColor = 'white';
        };
    }, [color]); // Dependency array to run effect when 'color' changes

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>The current background color is: {color}</h2>
            <button onClick={() => setColor('lightblue')}>Change to Light Blue</button>
            <button onClick={() => setColor('lightgreen')} style={{ marginLeft: '10px' }}>Change to Light Green</button>
            <button onClick={() => setColor('lightcoral')} style={{ marginLeft: '10px' }}>Change to Light Coral</button>
        </div>
    );
};

export default UseEffectS;
