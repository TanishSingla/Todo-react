import React, { useState } from "react";
import Todo from "./Todo.jsx";
import { TodoContext } from "../context/TodoContext.jsx";
import { initialTodos } from "../data/initialTodos.js";

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [inp, setInp] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrEditTodo = () => {
    if (!inp.trim()) return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, title: inp } : todo
        )
      );
      setEditId(null);
      setInp("");
      return;
    }

    const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), -1);
    setTodos([...todos, { id: maxId + 1, title: inp, isCompleted: false }]);
    setInp("");
  };

  const handleEditClick = (id, title) => {
    setInp(title);
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
    <TodoContext.Provider value={{ handleEditClick, handleMarkCompleted }}>
      <h3>Add Todo</h3>
      <input value={inp} onChange={(e) => setInp(e.target.value)} />
      <button onClick={handleAddOrEditTodo}>{editId ? "Edit" : "Add"}</button>
      <h2>Todo List – useContext</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </TodoContext.Provider>
  );
};

export default TodoList;
