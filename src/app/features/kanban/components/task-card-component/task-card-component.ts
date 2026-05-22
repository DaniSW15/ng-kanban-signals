import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { TaskModel, TaskStatus } from '../../models/task-model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-card-component',
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-card-component.html',
  styleUrl: './task-card-component.scss',
})
export class TaskCardComponent {
  task = input.required<TaskModel>();

  taskMoved = output<TaskStatus>();
  taskEdited = output<TaskModel>();
  taskDeleted = output<number>();

  onMove(newStatus: TaskStatus) {
    this.taskMoved.emit(newStatus);
  }

  onEdit() {
    this.taskEdited.emit(this.task());
  }

  onDelete(taskId: number) {
    this.taskDeleted.emit(taskId);
  }
}
