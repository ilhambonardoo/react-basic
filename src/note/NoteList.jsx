import { useContext } from "react";
import Note from "./Note";
import { DispatchNotesContext, NotesContext } from "./NoteContext";

const NoteList = () => {
  const notes = useContext(NotesContext);
  return (
    <>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoteList;
