import { createStore } from "redux";
import { todosReducer } from "../features/todos/todo.reducer.js";

export const store = createStore(todosReducer);
