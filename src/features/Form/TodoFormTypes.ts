import { Todo } from "../Todo/TodoTypes.ts";

export type TodoFormTypes = {
    dispatchTodoHandler: (todo: Todo) => void;
};
