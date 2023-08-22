import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal";
import todo from "./todo";

const store = configureStore({
  reducer: {
    modal,
    todo,
  },
});

export default store;
