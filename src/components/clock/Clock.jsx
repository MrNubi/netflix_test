import React from 'react';

import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <span color="white">{time.toLocaleTimeString()}</span>
    </div>
  );
}

export default Clock;
