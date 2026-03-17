import { useState } from "react";
import { useImmer } from "use-immer";

const Task = () => {
  const [item, setItem] = useState("");
  const [items, setItmes] = useImmer([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setItmes((draft) => {
      draft.push(item);
    });
    setItem("");
  }
  return (
    <>
      <div>
        <h1>Create Task</h1>
        <form>
          <input type="text" value={item} onChange={handleChange} />
          <button onClick={handleClick}>Add</button>
        </form>

        <h1>Task List</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Task;
