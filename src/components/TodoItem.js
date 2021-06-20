import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/action";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="row">
        {todo.id} {todo.name}
        {editable ? (
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        ) : (
          <h4>{todo.name}</h4>
        )}
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name
              })
            );
            if (editable) {
              setName(todo.name);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
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
