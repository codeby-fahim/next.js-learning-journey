'use client'

import React, { useState } from 'react';

const Counter = () => {
  console.log("Counter Component Rendered");
  const [count, setCount] = useState(0);
  const handleIncrease= ()=>{
    console.log("Increase button clicked");
    setCount(count + 1);
  }
  return (
    <div>
      <h2 className='text-4xl font-bold mb-4'>Counter: {count}</h2>
      <button onClick={handleIncrease} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increase</button>
    </div>
  );
};

export default Counter;