export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
}

export type TaskStatus = 'toDo' | 'inProgress' | 'done';

export type Priority = 'low' | 'medium' | 'high';

export type PriorityFilter = Priority | 'all';

export interface TaskFormData {
  title: string;
  description: string;
  priority: Priority;
}
