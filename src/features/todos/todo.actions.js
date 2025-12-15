import { ADD_TODO, EDIT_TODO, MARK_COMPLETED } from "./todo.types.js";

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: title,
});

export const editTodo = (id, title) => ({
  type: EDIT_TODO,
  payload: { id, title },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: id,
});
