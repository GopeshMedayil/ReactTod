import React from "react";

function TodoInput() {
  return (
    <React.Fragment>
      <div className="row m-2">
        <input type="text" className="col form-control" />
        <button className="btn btn-primary">ADD</button>
      </div>
    </React.Fragment>
  );
}

export default TodoInput;
