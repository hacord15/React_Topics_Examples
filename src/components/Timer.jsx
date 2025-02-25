import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timerId = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      // Cleanup the timeout when the component unmounts or time changes
      return () => clearTimeout(timerId);
    }
  }, [time]); // Only rerun the effect when time changes

  return (
    <div>
      Time Left: {time} second{time !== 1 ? 's' : ''}
    </div>
  );
};

export default Timer;
