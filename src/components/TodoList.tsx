import { TodoItem } from './TodoItem';
import type { TodoItem as TodoItemType } from '@/lib/types';
import { Droppable, Draggable } from '@hello-pangea/dnd';

interface TodoListProps {
    todos: TodoItemType[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    isDragDisabled?: boolean;
}

export function TodoList({ todos, onToggle, onDelete, isDragDisabled }: TodoListProps) {
    if (todos.length === 0) {
        return (
            <div className="text-center py-10 text-zinc-500">
                No tasks found.
            </div>
        );
    }

    return (
        <Droppable droppableId="todo-list" isDropDisabled={isDragDisabled}>
            {(provided) => (
                <ul
                    className="w-full"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            draggableId={todo.id}
                            index={index}
                            isDragDisabled={isDragDisabled}
                        >
                            {(provided) => (
                                <TodoItem
                                    todo={todo}
                                    onToggle={onToggle}
                                    onDelete={onDelete}
                                    provided={provided}
                                    isDragDisabled={isDragDisabled}
                                />
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </ul>
            )}
        </Droppable>
    );
}
