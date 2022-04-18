import React, { useState } from 'react'
import './App.css';
import { TestComponentMemo } from './TestComponent';

function App() {
  const [count, setCount] = useState(0)

  const changeCount = () => {
    setCount(1)
  }

  return (
    <>
      <TestComponentMemo count={count} />
      <button onClick={changeCount}>Click</button>
    </>
  );
}

export default App;
