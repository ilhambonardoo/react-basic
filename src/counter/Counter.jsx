import { useState } from "react";

const Counter = ({ nama }) => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>
        Counter {nama}: {count}
      </h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
