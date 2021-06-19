export const ADD_TODO = "ADD_TODO";
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export const UPDATE_TODO = "UPDATE_TODO";
export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo
  };
}

export const DELETE_TODO = "DELETE_TODO";
export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    payload: todo
  };
}
