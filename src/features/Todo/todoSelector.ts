import { Todo } from "./TodoTypes";
import { RootState } from "../../store/store";

export const selectTodos = (state: RootState): Todo[] => state.todos.todos;
