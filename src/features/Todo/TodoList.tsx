import React from "react";

import { TodoItem } from "./TodoItem";

import { Todo, TodoListProps } from "./TodoTypes";

export const TodoList: React.FC<TodoListProps> = ({
    todoList,
    onDeleteItem,
}: TodoListProps) => {
    return (
        <ul className="todo-list-container">
            {todoList.map((todoItem: Todo) => (
                <li key={todoItem.id}>
                    <TodoItem
                        onDeleteItem={onDeleteItem}
                        taskDescription={todoItem.taskDescription}
                        id={todoItem.id}
                    />
                </li>
            ))}
        </ul>
    );
};
