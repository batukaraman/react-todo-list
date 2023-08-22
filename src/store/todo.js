import { createSlice } from "@reduxjs/toolkit";
import { parseDateTime } from "../utils/DateTime";

const todo = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        title: "Kitap oku!",
        date: "28.07.2023 ÖS 09:20",
        done: false,
        id: "f4wgPh8mH-PNZx5AAfB2u",
      },
      {
        title: "Spor yap.",
        date: "28.07.2023 ÖS 09:10",
        done: false,
        id: "YNKrYucPaiLWiQtbOYGnF",
      },
      {
        title: "Gitar çal!",
        date: "28.07.2023 ÖS 09:16",
        done: false,
        id: "icLGtuJl9ECujWNKnZxcW",
      },
    ],
  },
  reducers: {
    filterTodo: (state, action) => {
      state.todos = state.todos.sort((a, b) => {
        const dateA = parseDateTime(a.date);
        const dateB = parseDateTime(b.date);
        switch (action.payload.filter) {
          case "ASC_DATE":
            return dateA - dateB;
          case "DESC_DATE":
            return dateB - dateA;
          case "ASC_NAME":
            return a.title.localeCompare(b.title);
          case "DESC_NAME":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
    },
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          todo.title = action.payload.title;
          todo.done = action.payload.done;
        }
        return todo;
      });
    },
  },
});

export const { filterTodo, addTodo, deleteTodo, updateTodo } = todo.actions;
export default todo.reducer;
