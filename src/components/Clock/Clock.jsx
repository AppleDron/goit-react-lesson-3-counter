import React, { Component, useEffect, useRef, useState } from 'react';
import './Clock.scss';

const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => stop();
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className="Clock__face">
      {time}
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

export default Clock;
