import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { DispatchNotesContext, NotesContext } from "./NoteContext";

let id = 0;
const initialNotes = [
  {
    id: id++,
    text: "Learn Python",
    done: true,
  },
  {
    id: id++,
    text: "Algoritma Struktur Data",
    done: true,
  },
  {
    id: id++,
    text: "Calculus",
    done: false,
  },
  {
    id: id++,
    text: "Machine Learning",
    done: false,
  },
];

function notesReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index] = { ...action };
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }
}

const NoteApp = () => {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <>
      <NotesContext.Provider value={notes}>
        <DispatchNotesContext value={dispatch}>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList notes={notes} />
        </DispatchNotesContext>
      </NotesContext.Provider>
    </>
  );
};

export default NoteApp;
