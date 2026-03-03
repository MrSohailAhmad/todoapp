import type { FilterConfig } from '@/lib/types';

interface FilterBarProps {
    currentFilter: FilterConfig;
    onFilterChange: (filter: FilterConfig) => void;
    itemsLeft: number;
}

export function FilterBar({ currentFilter, onFilterChange, itemsLeft }: FilterBarProps) {
    const filters: FilterConfig[] = ['All', 'Active', 'Completed'];

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-400">
            <span>{itemsLeft} item{itemsLeft !== 1 ? 's' : ''} left</span>

            <div className="flex gap-2">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => onFilterChange(filter)}
                        className={`px-3 py-1 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentFilter === filter
                                ? 'bg-zinc-800 text-white'
                                : 'hover:bg-zinc-800/50 hover:text-zinc-200'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}
