import { useRef, useState } from "react";

const Timer = () => {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const timer = useRef(null);

  const time = now - start;

  function handleStart() {
    setStart(Date.now());
    setNow(Date.now());

    timer.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <>
      <h1>Timer : {time} ms</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
};

export default Timer;
