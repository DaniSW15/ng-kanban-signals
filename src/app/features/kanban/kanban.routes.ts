import { Routes } from '@angular/router';
import { KanbanPageComponent } from './presentation/pages/kanban-page/kanban-page.component';
import { TaskRepository } from './domain/repositories/task.repository';
import { LocalStorageTaskRepository } from './infrastructure/repositories/local-storage-task.repository';
import { TaskStore } from './application/task.store';

export const kanbanRoutes: Routes = [
  {
    path: '',
    component: KanbanPageComponent,
    providers: [
      { provide: TaskRepository, useClass: LocalStorageTaskRepository },
      TaskStore,
    ],
  },
];
