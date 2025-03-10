import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTodos } from "../features/Todo/todoSelector";
import { deleteTodo, addTodo } from "../features/Todo/todoSlice";
import { TodoList } from "../features/Todo/TodoList";
import { TodoForm } from "../features/Form/TodoForm";
import { PageLayout } from "../features/PageLayout/PageLayout";

import { AppDispatch } from "../store/store";
import { Todo } from "../features/Todo/TodoTypes";

export const HomePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const todos: Todo[] = useSelector(selectTodos);

    return (
        <PageLayout>
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
        </PageLayout>
    );
};
