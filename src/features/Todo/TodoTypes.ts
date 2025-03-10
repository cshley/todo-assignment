export type Todo = {
    id: number;
    taskDescription: string;
};

export type TodoListProps = {
    todoList: Todo[];
    onDeleteItem: (id: number) => void;
};

export type TodoItemProps = {
    id: number;
    taskDescription: string;
    onDeleteItem: (id: number) => void;
};
