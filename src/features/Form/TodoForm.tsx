import React, { useState } from "react";
import { Plus } from "lucide-react";

import { TodoFormTypes } from "./TodoFormTypes.ts";

export const TodoForm: React.FC<TodoFormTypes> = ({
    dispatchTodoHandler,
}: TodoFormTypes) => {
    const [taskDescription, setTaskDescription] = useState<string>("");
    const [error, setError] = useState<string>("");

    const onClickHandler = () => {
        if (!taskDescription.trim()) {
            setError(
                "It looks like you forgot to add a TODO. Type something and try again!"
            );
            return;
        }
        setError("");
        dispatchTodoHandler({ id: Math.random(), taskDescription });
        setTaskDescription("");
    };

    return (
        <div className="todo-form-container">
            <label
                htmlFor="task-description"
                className="todo-form-task-description-label"
            >
                What’s on your mind? Add a new TODO!
            </label>
            <div className="todo-form-task-description-input-container">
                <input
                    id="task-description"
                    type="text"
                    value={taskDescription}
                    className="todo-form-task-description-input"
                    onChange={(event) => {
                        setTaskDescription(event.target.value);
                        if (error) setError("");
                    }}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") onClickHandler();
                    }}
                    onClick={() => setError("")}
                    autoComplete="off"
                />
                <button
                    onClick={onClickHandler}
                    className="button-primary"
                    aria-label="Add a new TODO"
                >
                    <Plus className="button-icon" aria-hidden="true" />
                </button>
            </div>
            <div aria-live="polite">
                {error && <p role={"alert"}>{error}</p>}
            </div>
        </div>
    );
};
