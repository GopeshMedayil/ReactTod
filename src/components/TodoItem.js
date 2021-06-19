import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/action";

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="row">
        #1 {todo.name}
        <button
          className="btn btn-primary"
          onClick={() => dispatch(updateTodo(todo))}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTodo(todo))}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
}

export default TodoItem;
