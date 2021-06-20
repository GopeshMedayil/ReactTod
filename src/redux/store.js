import { combineReducers, createStore } from "redux";
import { todo, testReducer } from "./reducer";
import { loadState, saveState } from "./localStorage";
import { todos } from "./states";
// localStorage.setItem("todos", JSON.stringify(todos));
const persistedState = loadState();
const rootReducer = combineReducers({
  todo,
  testReducer
});
export let store = createStore(rootReducer, persistedState);
console.log("Actual state ", store.getState());
store.subscribe(() => {
  saveState(store.getState());
});
