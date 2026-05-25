import { Injectable } from '@angular/core';
import { Task } from '../../domain/models/task.model';
import { TaskRepository } from '../../domain/repositories/task.repository';

@Injectable()
export class LocalStorageTaskRepository extends TaskRepository {
  private readonly STORAGE_KEY = 'kanban_tasks';

  getAll(): Task[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return this.migrate(JSON.parse(stored));
      }
      return this.seedMockData();
    } catch {
      return this.seedMockData();
    }
  }

  save(tasks: Task[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  }

  private migrate(raw: Task[]): Task[] {
    return raw.map((t) => ({
      id: t.id,
      title: t.title,
      description: t.description ?? '',
      priority: t.priority,
      status: t.status ?? 'toDo',
    }));
  }

  private seedMockData(): Task[] {
    return [
      {
        id: Date.now(),
        title: 'Aprender Angular Signals',
        description: 'Estudiar signals, computed y effect en profundidad',
        priority: 'high',
        status: 'toDo',
      },
      {
        id: Date.now() + 1,
        title: 'Construir Kanban',
        description: 'Implementar columnas con control flow nativo de Angular',
        priority: 'medium',
        status: 'inProgress',
      },
      {
        id: Date.now() + 2,
        title: 'Revisar arquitectura',
        description: 'Aplicar capas domain, application, infrastructure y presentation',
        priority: 'high',
        status: 'done',
      },
    ];
  }
}
