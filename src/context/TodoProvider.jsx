import React, { useState } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import { initialTodos } from "../data/initialTodos.js";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [addOrEditTask, setaddOrEditTask] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrEditTodo = () => {
    if (!addOrEditTask.trim()) return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, title: addOrEditTask } : todo
        )
      );
      setEditId(null);
      setaddOrEditTask("");
      return;
    }

    const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), -1);
    setTodos([
      ...todos,
      { id: maxId + 1, title: addOrEditTask, isCompleted: false },
    ]);
    setaddOrEditTask("");
  };

  const handleEditClick = (id, title) => {
    setaddOrEditTask(title);
    setEditId(id);
  };

  const handleMarkCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addOrEditTask,
        setaddOrEditTask,
        editId,
        handleAddOrEditTodo,
        handleEditClick,
        handleMarkCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
