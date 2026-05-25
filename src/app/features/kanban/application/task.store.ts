import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { PriorityFilter, Task, TaskFormData, TaskStatus } from '../domain/models/task.model';
import { TaskRepository } from '../domain/repositories/task.repository';

/**
 * Estado global de la feature Kanban.
 * Coordina el flujo: presentation → store → repository.
 * No conoce detalles de infraestructura ni de UI.
 */
@Injectable()
export class TaskStore {
  private readonly repo = inject(TaskRepository);

  private readonly _tasks = signal<Task[]>(this.repo.getAll());

  readonly filterPriority = signal<PriorityFilter>('all');

  readonly filteredTasks = computed(() => {
    const priority = this.filterPriority();
    const tasks = this._tasks();
    if (priority === 'all') return tasks;
    return tasks.filter((t) => t.priority === priority);
  });

  readonly taskByColumn = computed(() => {
    const tasks = this.filteredTasks();
    return {
      todo: tasks.filter((t) => t.status === 'toDo').sort((a, b) => a.id - b.id),
      inProgress: tasks.filter((t) => t.status === 'inProgress').sort((a, b) => a.id - b.id),
      done: tasks.filter((t) => t.status === 'done').sort((a, b) => a.id - b.id),
    };
  });

  constructor() {
    effect(() => this.repo.save(this._tasks()));
  }

  addTask(data: TaskFormData): void {
    const task: Task = { id: Date.now(), ...data, status: 'toDo' };
    this._tasks.update((tasks) => [...tasks, task]);
  }

  updateTask(updated: Task): void {
    this._tasks.update((tasks) =>
      tasks.map((t) => (t.id === updated.id ? updated : t))
    );
  }

  deleteTask(id: number): void {
    this._tasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }

  moveTask(id: number, status: TaskStatus): void {
    this._tasks.update((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, status } : t))
    );
  }
}
