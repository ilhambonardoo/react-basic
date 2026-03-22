import { useRef } from "react";

const AlertButton = ({ text, message }) => {
  const counter = useRef(0);

  function handleClick(e) {
    console.info(e.target);
    alert(`${message} now ${counter.current++}`);
  }
  return <button onClick={handleClick}>{text}</button>;
};

export default AlertButton;
