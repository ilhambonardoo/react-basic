import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      text: "Learn JAVSCRIPT",
      isCompleted: true,
    },
    {
      text: "Learn React JS",
      isCompleted: false,
    },
  ];

  const todos = data.map((todo) => <Todo {...todo} />);
  return <ul>{todos}</ul>;
}
