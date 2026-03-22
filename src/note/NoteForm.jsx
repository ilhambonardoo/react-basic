import { useContext, useState } from "react";
import { DispatchNotesContext } from "./NoteContext";

const NoteForm = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(DispatchNotesContext);

  function handleClick() {
    setText("");
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
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
