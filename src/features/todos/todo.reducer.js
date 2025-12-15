import { ADD_TODO, EDIT_TODO, MARK_COMPLETED } from "./todo.types.js";

const initialState = {
  todos: [
    { id: 1, title: "Learn Redux", isCompleted: false },
    { id: 2, title: "Learn RTK", isCompleted: true },
    { id: 3, title: "Learn Javascript", isCompleted: true },
  ],
};

function nextTodoId(todos) {
  return todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1;
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            title: action.payload,
            isCompleted: false,
          },
        ],
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      };

    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isCompleted: true } : todo
        ),
      };

    default:
      return state;
  }
};
