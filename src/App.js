import "./styles.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="App m-5">
      <h1>React Hooks Todo</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
