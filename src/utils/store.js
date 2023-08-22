import store from "../store";
import { filterTodo, addTodo, deleteTodo, updateTodo } from "../store/todo";

export const filterTodoHandle = (filter) => {
  store.dispatch(filterTodo(filter));
};

export const addTodoHandle = (todo) => {
  store.dispatch(addTodo(todo));
};

export const deleteTodoHandle = (id) => {
  store.dispatch(deleteTodo(id));
};

export const updateTodoHandle = (todo) => {
  store.dispatch(updateTodo(todo));
};
