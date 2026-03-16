const AlertButton = ({ text, message }) => {
  function handleClick() {
    alert(message);
  }
  return <button onClick={handleClick}>{text}</button>;
};

export default AlertButton;
