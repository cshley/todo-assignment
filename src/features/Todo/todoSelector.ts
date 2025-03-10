import { Todo } from "./TodoTypes.ts";
import { RootState } from "../../store/store.ts";

export const selectTodos = (state: RootState): Todo[] => state.todos.todos;
