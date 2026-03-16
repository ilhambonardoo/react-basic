import Todo from "./Todo";

export default function TodoList() {
  return (
    <ul>
      <Todo text="Learn HTML" isCompleted={true} isDeleted={true} />
      <Todo text="Learn CSS" isCompleted={true} isDeleted={true} />
      <Todo text="Learn JavaScript" isCompleted={true} isDeleted={false} />
      <Todo text="Learn ReactJs" isCompleted={true} isDeleted={false} />
    </ul>
  );
}
