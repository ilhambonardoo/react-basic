import { useRef, useState } from "react";

const GuestBook = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setMessage("");

    nameInput.current.focus();

    alert(`Name : ${name} Message : ${message}`);
  }

  return (
    <>
      <h1>Guest Book</h1>
      <form>
        <label htmlFor="name">Name : </label>
        <input
          ref={nameInput}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default GuestBook;
