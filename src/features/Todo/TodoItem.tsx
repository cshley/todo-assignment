import React from "react";
import { Check } from "lucide-react";

import { TodoItemProps } from "./TodoTypes";

export const TodoItem: React.FC<TodoItemProps> = ({
    id,
    taskDescription,
    onDeleteItem,
}: TodoItemProps) => {
    const handleDelete = () => onDeleteItem(id);
    return (
        <div className="todo-item-container">
            <div className="todo-item-row">
                <h3>{taskDescription}</h3>
                <button
                    onClick={handleDelete}
                    className="button-primary"
                    aria-label={`Delete TODO: ${taskDescription}`}
                    onKeyDown={(event) =>
                        event.key === "Enter" && handleDelete()
                    }
                >
                    <Check className="button-icon" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};
