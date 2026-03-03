'use client';

import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from '@/components/TodoInput';
import { TodoList } from '@/components/TodoList';
import { FilterBar } from '@/components/FilterBar';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

export default function Home() {
  const {
    todos,
    filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    reorderTodos,
    filter,
    setFilter,
    isLoaded
  } = useTodos();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    reorderTodos(result.source.index, result.destination.index);
  };

  const activeItemsLeft = todos.filter(t => !t.completed).length;

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-black">
        <div className="text-zinc-500 animate-pulse">Loading items...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans bg-black flex justify-center selection:bg-blue-500/30">
      <main className="w-full max-w-xl flex flex-col gap-6">
        <header className="mb-4">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Todo List
          </h1>
          <p className="text-lg text-zinc-400">
            Keep track of your daily tasks.
          </p>
        </header>

        <section>
          <TodoInput onAdd={addTodo} />

          <DragDropContext onDragEnd={handleDragEnd}>
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              isDragDisabled={filter !== 'All'}
            />
          </DragDropContext>

          {todos.length > 0 && (
            <FilterBar
              currentFilter={filter}
              onFilterChange={setFilter}
              itemsLeft={activeItemsLeft}
            />
          )}
        </section>
      </main>
    </div>
  );
}
