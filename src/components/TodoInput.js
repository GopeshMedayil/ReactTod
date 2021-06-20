import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import { v4 as uuid } from "uuid";
function TodoInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="row m-2">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="col form-control"
        />
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addTodo({ id: uuid(), name: name }))}
        >
          ADD
        </button>
      </div>
    </React.Fragment>
  );
}

export default TodoInput;
