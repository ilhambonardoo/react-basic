import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";
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
        <GuestBookForm ref={nameInput} setName={setName} name={name} />
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
