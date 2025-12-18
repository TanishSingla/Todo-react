import React from "react";
import TodoList from "./components/TodoList.jsx";
import TodoProvider from "./context/TodoProvider.jsx";

const App = () => {
  return (
    <div>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default App;
