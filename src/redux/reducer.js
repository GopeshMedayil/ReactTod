import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      console.log("In ADDTODO", action);
      let newTodo = [...state];
      newTodo.push(action.payload);
      return newTodo;
      break;
    case UPDATE_TODO:
      newTodos = [...state];
      let index = -1;
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id === action.payload.id) {
          break;
        }
      }
      if (index != -1) {
        newTodos[index] = action.payload;
        return newTodos;
      }
      break;
    case DELETE_TODO:
      newTodos = [...state];
      console.log("In Delete ", action);
      newTodos = newTodos.filter((todo) => todo.id !== action.payload.id);
      return newTodos;
      break;
    default:
      return state;
  }
};
let testSate = [{ name: "Gopesh" }];
export let testReducer = (state = testSate, action) => {
  switch (action.type) {
    case "ADD":
      break;
    default:
      return state;
  }
};
