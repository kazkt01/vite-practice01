import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Todo } from "./Todo";

// ここの記述がUdemyで見たのと違っている。
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
