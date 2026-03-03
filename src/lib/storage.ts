import type { TodoItem } from "./types";

const STORAGE_KEY = "todo_list_data";

export const getTodos = (): TodoItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as TodoItem[];
    }
  } catch (e) {
    console.error("Failed to parse todos from localStorage", e);
  }
  return [];
};

export const setTodos = (todos: TodoItem[]): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error("Failed to save todos to localStorage", e);
  }
};
