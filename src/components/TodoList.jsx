import React, { useContext } from "react";
import Todo from "./Todo.jsx";
import { TodoContext } from "../context/TodoContext.jsx";

const TodoList = () => {
  const {
    todos,
    addOrEditTask,
    setaddOrEditTask,
    editId,
    handleAddOrEditTodo,
  } = useContext(TodoContext);

  return (
    <>
      <h3>Add Todo</h3>
      <input
        value={addOrEditTask}
        onChange={(e) => setaddOrEditTask(e.target.value)}
      />
      <button onClick={handleAddOrEditTodo}>{editId ? "Edit" : "Add"}</button>

      <h2>Todo List – useContext</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
