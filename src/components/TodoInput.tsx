import { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim()) {
            onAdd(value);
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                placeholder="Add a new task..."
                className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="submit"
                disabled={!value.trim()}
                className="px-4 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                aria-label="Add task"
            >
                <Plus size={20} />
                <span className="sr-only sm:not-sr-only">Add</span>
            </button>
        </form>
    );
}
