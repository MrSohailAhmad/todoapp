import { CheckCircle2, Circle, Trash2, GripVertical } from 'lucide-react';
import type { TodoItem as TodoItemType } from '@/lib/types';
import type { DraggableProvided } from '@hello-pangea/dnd';

interface TodoItemProps {
    todo: TodoItemType;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    provided?: DraggableProvided;
    isDragDisabled?: boolean;
}

export function TodoItem({ todo, onToggle, onDelete, provided, isDragDisabled }: TodoItemProps) {
    const isGoal = todo.text.toLowerCase().includes('goal');

    return (
        <li
            ref={provided?.innerRef}
            {...provided?.draggableProps}
            className={`flex items-center gap-3 p-4 mb-2 border rounded-lg group transition-all hover:bg-zinc-800/80 ${isGoal ? 'bg-indigo-950 border-indigo-800' : 'bg-zinc-900 border-zinc-800'
                } ${!isDragDisabled && provided ? 'cursor-grab hover:shadow-md active:cursor-grabbing active:scale-[0.99] active:shadow-lg' : ''
                }`}
        >
            {provided && !isDragDisabled && (
                <div
                    {...provided.dragHandleProps}
                    className="text-zinc-600 hover:text-zinc-400 focus:outline-none focus:text-zinc-400 p-1 -ml-2"
                >
                    <GripVertical size={20} />
                </div>
            )}

            <button
                onClick={() => onToggle(todo.id)}
                className="text-zinc-500 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
            >
                {todo.completed ? (
                    <CheckCircle2 className="text-blue-500" size={24} />
                ) : (
                    <Circle size={24} />
                )}
            </button>

            <span
                className={`flex-1 transition-all ${todo.completed ? 'text-zinc-500 line-through' : 'text-zinc-100'
                    }`}
            >
                {todo.text}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
                className="opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-red-500 text-white transition-all focus:outline-none focus:ring-2 focus:ring-red-500 rounded p-1.5 focus:opacity-100"
                aria-label="Delete task"
            >
                <Trash2 size={20} />
            </button>
        </li>
    );
}
