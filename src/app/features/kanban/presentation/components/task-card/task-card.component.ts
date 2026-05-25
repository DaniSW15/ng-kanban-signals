import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Task, TaskStatus } from '../../../domain/models/task.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-card',
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  task = input.required<Task>();

  taskMoved = output<TaskStatus>();
  taskEdited = output<Task>();
  taskDeleted = output<number>();

  onMove(status: TaskStatus): void {
    this.taskMoved.emit(status);
  }

  onEdit(): void {
    this.taskEdited.emit(this.task());
  }

  onDelete(id: number): void {
    this.taskDeleted.emit(id);
  }
}
