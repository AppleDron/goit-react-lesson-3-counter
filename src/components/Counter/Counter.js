import { Component, useEffect, useState } from 'react';
import { Controls } from './Controls';
import { Value } from './Value';
import './Counter.css';

import React from 'react';

const Counter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setCounterB(prevState => prevState - 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `All clicks ${totalClicks} times`;
  }, [counterA, counterB]);

  return (
    <div className="Counter">
      <Value value={this.state.value} />
      <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
};

export default Counter;
