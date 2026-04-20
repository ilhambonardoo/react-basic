import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

const NoteList = () => {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.info("Filtering Note");
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  function handleSearch() {
    console.info("Searching.....");
    setSearch(searchInput.current.value);
  }

  return (
    <>
      <div>
        <input placeholder="Search" ref={searchInput} />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {filteredNotes.map((note) => (
            <li key={note.id}>
              <Note note={note} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NoteList;
