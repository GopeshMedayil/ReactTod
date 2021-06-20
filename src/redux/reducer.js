import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("In ADDTODO", action);
      let newTodo = [...state];
      newTodo.push(action.payload);
      return newTodo;
      break;
    case UPDATE_TODO:
      break;
    case DELETE_TODO:
      let newTodos = [...state];
      console.log("In Delete ", action);
      newTodos = newTodos.filter((todo) => todo.id !== action.payload.id);
      return newTodos;
      break;
    default:
      return state;
  }
};
