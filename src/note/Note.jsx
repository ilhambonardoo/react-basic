import { useContext, useState } from "react";
import { DispatchNotesContext, NotesContext } from "./NoteContext";

const Note = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(DispatchNotesContext);

  let component;

  function handleChangeText(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      text: e.target.value,
    });
  }

  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      done: e.target.value,
    });
  }

  function handleDelete() {
    dispatch({
      ...note,
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component}
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
};

export default Note;
