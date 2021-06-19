import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
function TodoList() {
  let todos = useSelector((state) => state);
  console.log(" Todos", todos);
  return (
    <React.Fragment>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </React.Fragment>
  );
}

export default TodoList;
