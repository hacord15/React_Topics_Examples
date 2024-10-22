import React, { useRef, useState } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null); // useRef to store the timer ID
  const prevTimeRef = useRef(0); // useRef to store the previous time value

  // Start the stopwatch
  const startTimer = () => {
    if (timerRef.current) return; // Prevent multiple timers
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  // Stop the stopwatch
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Reset the stopwatch
  const resetTimer = () => {
    stopTimer();
    prevTimeRef.current = time; // Store the previous time
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Stopwatch</h2>
      <h1>{time} seconds</h1>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      {prevTimeRef.current !== 0 && <p>Previous Time: {prevTimeRef.current} seconds</p>}
    </div>
  );
};

export default Stopwatch;
