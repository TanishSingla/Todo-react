import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/Todo/todoSlice.js";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
