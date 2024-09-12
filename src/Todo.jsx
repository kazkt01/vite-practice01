import { useState } from "react";
import "./styles/sanitize (13).css";
import "./styles/styles.css";
import { InputTodo } from "./Components/inputTodo";
import { IncompleteTodos } from "./Components/IncompleteTodos.JSX";
import { CompleteTodos } from "./Components/CompleteTodos";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([
    "Todoです。1",
    "Todoです。2",
  ]);

  const [completeTodos, setCompleteTodos] = useState([
    "Todoでした。1",
    "Todoでした。2",
  ]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);
    setTodoText("");
    if (todoText === "") return;
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      {/* /////////// ここから完了のTODO
      ////////////////////////////////// */}
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
