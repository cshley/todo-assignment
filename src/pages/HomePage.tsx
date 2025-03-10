import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTodos } from "../features/Todo/todoSelector.ts";
import { deleteTodo, addTodo } from "../features/Todo/todoSlice.ts";
import { TodoList } from "../features/Todo/TodoList.tsx";
import { TodoForm } from "../features/Form/TodoForm.tsx";
import { PageLayout } from "../features/PageLayout/PageLayout.tsx";

import { AppDispatch } from "../store/store.ts";
import { Todo } from "../features/Todo/TodoTypes.ts";

export const HomePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const todos: Todo[] = useSelector(selectTodos);

    return (
        <PageLayout
            children={
                <>
                    <TodoForm
                        dispatchTodoHandler={(todo: Todo) => {
                            dispatch(addTodo(todo));
                        }}
                    />
                    <TodoList
                        todoList={todos}
                        onDeleteItem={(id: number) => {
                            dispatch(deleteTodo(id));
                        }}
                    />
                </>
            }
        />
    );
};
