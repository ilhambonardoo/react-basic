import { createRoot } from "react-dom/client";
import Task from "./Task";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Task />
  </StrictMode>,
);
