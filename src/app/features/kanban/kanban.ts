import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from './services/task-service';
import { Priority, TaskFormSignal, TaskModel, TaskStatus } from './models/task-model';
import { ColumnComponent } from "./components/column-component/column-component";
import { TaskFormComponent } from './components/task-form-component/task-form-component';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditComponent } from './components/task-edit-component/task-edit-component';
import { ConfirmDialogComponent } from './components/confirm-dialog-component/confirm-dialog-component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ThemeService } from '../../core/theme-service/theme-service';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-kanban',
  imports: [
    ColumnComponent,
    TaskFormComponent,
    CdkDropList,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './kanban.html',
  styleUrl: './kanban.scss',
})
export class Kanban {
  readonly taskService = inject(TaskService);
  private readonly dialog = inject(MatDialog);
  readonly themeService = inject(ThemeService);
  private readonly announcer = inject(LiveAnnouncer);

  private readonly statusLabelMap: Record<TaskStatus, string> = {
    'toDo': 'Por Hacer',
    'inProgress': 'En Progreso',
    'done': 'Hecho',
  };

  changeFilter(priority: Priority | 'all') {
    this.taskService.filterPriority.set(priority);
  }

  onTaskCreated(newTask: TaskFormSignal) {
    this.taskService.addTask({
      ...newTask,
      status: 'toDo',
    });
  }

  deleteTask(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.taskService.deleteTask(id);
        this.announcer.announce('Tarea eliminada');
      }
    });
  }

  moveTask(task: TaskModel, status: TaskStatus) {
    this.taskService.moveTask(task.id, status);
    this.announcer.announce(`"${task.title}" movida a ${this.statusLabelMap[status]}`);
  }

  private readonly columnStatusMap: Record<string, TaskStatus> = {
    'todo': 'toDo',
    'inProgress': 'inProgress',
    'done': 'done',
  };

  onDrop(event: CdkDragDrop<TaskModel[]>, columnType: string) {
    if (event.previousContainer !== event.container) {
      const task = event.item.data as TaskModel;
      const newStatus = this.columnStatusMap[columnType] ?? 'toDo';
      this.moveTask(task, newStatus);
    }
  }

  editTask(task: TaskModel) {
    const dialogRef = this.dialog.open(TaskEditComponent, {
      width: '400px',
      data: { task }
    });

    dialogRef.afterClosed().subscribe((updatedTask: TaskModel | undefined) => {
      if (updatedTask) this.taskService.updateTask(updatedTask);
    });
  }
}
