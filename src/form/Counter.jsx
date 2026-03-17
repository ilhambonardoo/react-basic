import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    console.info(counter);
  }

  return (
    <div>
      <button onClick={increment}>Click for increment</button>
      <h1>Number : {counter}</h1>
    </div>
  );
};

export default Counter;
