import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "./TodoTypes";

export type TodoState = {
    todos: Todo[];
};

const initialState: TodoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.unshift(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todoItem: Todo) => {
                return todoItem.id !== action.payload;
            });
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
