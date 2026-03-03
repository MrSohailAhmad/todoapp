import { useState, useEffect, useCallback, useMemo } from "react";
import type { TodoItem, FilterConfig } from "@/lib/types";
import { getTodos, setTodos } from "@/lib/storage";

export function useTodos() {
  const [todos, setTodosState] = useState<TodoItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState<FilterConfig>("All");

  // Hydrate on mount
  useEffect(() => {
    setTodosState(getTodos());
    setIsLoaded(true);
  }, []);

  // Persist on change
  useEffect(() => {
    if (isLoaded) {
      setTodos(todos);
    }
  }, [todos, isLoaded]);

  const addTodo = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      text: trimmed,
      completed: false,
      createdAt: Date.now(),
    };

    setTodosState((prev) => [...prev, newTodo]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodosState((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodosState((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const reorderTodos = useCallback(
    (startIndex: number, endIndex: number) => {
      if (filter !== "All") return;

      setTodosState((prev) => {
        const result = Array.from(prev);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
      });
    },
    [filter],
  );

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "Active":
        return todos.filter((t) => !t.completed);
      case "Completed":
        return todos.filter((t) => t.completed);
      case "All":
      default:
        return todos;
    }
  }, [todos, filter]);

  return {
    todos,
    filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    reorderTodos,
    filter,
    setFilter,
    isLoaded,
  };
}
