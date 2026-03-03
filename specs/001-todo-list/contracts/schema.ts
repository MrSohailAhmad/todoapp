export type TodoStatus = "Active" | "Completed";
export type FilterConfig = "All" | "Active" | "Completed";

export interface TodoItem {
  id: string; // Unique identifier (e.g., UUID)
  text: string; // The user-provided content
  completed: boolean; // Computed or raw value showing if the task is done
  createdAt: number; // Stamped on creation for correct chronological rendering
}

export interface TodoStorageService {
  getTodos(): TodoItem[];
  setTodos(todos: TodoItem[]): void;
}
