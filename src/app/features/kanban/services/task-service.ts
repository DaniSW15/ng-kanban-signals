import { computed, effect, Injectable, signal } from '@angular/core';
import { PriorityFilter, TaskModel, TaskStatus } from '../models/task-model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly STORAGE_KEY = 'kanban_tasks';

  tasksSignal = signal<TaskModel[]>(this.loadFromLocalStorage());

  filterPriority = signal<PriorityFilter>('all');

  filteredTasks = computed(() => {
    const priority = this.filterPriority();
    const allTasks = this.tasksSignal();

    if (priority === 'all') return allTasks;
    return allTasks.filter((task) => task.priority === priority);
  });

  taskByColumn = computed(() => {
    const tasks = this.filteredTasks();

    return {
      todo: tasks.filter(t => t.status === 'toDo').sort((a, b) => a.id - b.id),
      inProgress: tasks.filter(t => t.status === 'inProgress').sort((a, b) => a.id - b.id),
      done: tasks.filter(t => t.status === 'done').sort((a, b) => a.id - b.id)
    };
  });

  constructor() {
    effect(() => {
      const tasks = this.tasksSignal();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    });
  }

  addTask(task: Omit<TaskModel, 'id'>) {
    const newTask: TaskModel = {
      id: Date.now(),
      ...task,
      status: task.status || 'toDo'
    };
    this.tasksSignal.update(tasks => [...tasks, newTask]);
  }

  updateTask(updatedTask: TaskModel) {
    this.tasksSignal.update(tasks => tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  }

  deleteTask(taskId: number) {
    this.tasksSignal.update(tasks => tasks.filter(task => task.id !== taskId));
  }

  moveTask(taskId: number, newStatus: TaskStatus) {
    this.tasksSignal.update(tasks => tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
  }

  private loadFromLocalStorage(): TaskModel[] {
    try {
      const storedTasks = localStorage.getItem(this.STORAGE_KEY);

      if (storedTasks) {
        let tasks = JSON.parse(storedTasks) as TaskModel[];
        return this.migrateTasks(tasks);

      } else {
        return this.loadMockData();
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
      return this.loadMockData();
    }
  }

  private migrateTasks(tasks: any[]): TaskModel[] {
    return tasks.map(task => ({
      id: task.id,
      title: task.title,
      description: task.description || '',
      priority: task.priority,
      status: task.status || 'toDo'
    }));
  }

  private loadMockData(): TaskModel[] {
    const mockTasks: TaskModel[] = [
      {
        id: Date.now(),
        title: 'Aprender Angular Signals',
        description: 'Estudiar signals, computed y effect',
        priority: 'high',
        status: 'toDo'
      },
      {
        id: Date.now() + 1,
        title: 'Construir Kanban',
        description: 'Implementar columnas con control flow nativo',
        priority: 'medium',
        status: 'inProgress'
      },
      {
        id: Date.now() + 2,
        title: 'Hacer deploy',
        description: 'Publicar la aplicación',
        priority: 'low',
        status: 'done'
      }
    ];
    return mockTasks;
  }

  resetToMockData() {
    this.tasksSignal.set(this.loadMockData());
  }

  clearAllTasks() {
    this.tasksSignal.set([]);
  }
}