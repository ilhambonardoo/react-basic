import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Task = () => {
  const [items, setItmes] = useImmer([]);

  return (
    <>
      <TaskForm setItems={setItmes} />
      <TaskList items={items} />
    </>
  );
};

export default Task;
