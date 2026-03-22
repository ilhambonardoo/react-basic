import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState("");
  function handleClick() {
    setText("");
    onAddNote(text);
  }
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        placeholder="tulis note"
        value={text}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default NoteForm;
