import { Component, input, output, ChangeDetectionStrategy, computed } from '@angular/core';
import { TaskModel, TaskStatus } from '../../models/task-model';
import { TaskCardComponent } from '../task-card-component/task-card-component';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column-component',
  imports: [TaskCardComponent, CdkDrag],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './column-component.html',
  styleUrl: './column-component.scss',
})
export class ColumnComponent {
  title = input<string>('');
  tasks = input<TaskModel[]>([]);

  taskMoved = output<{ task: TaskModel; newStatus: TaskStatus }>();
  taskEdited = output<TaskModel>();
  taskDeleted = output<number>();

  emptyStateMessage = input<string>('');
  columnType = input<'todo' | 'inProgress' | 'done'>('todo');

  onMove(task: TaskModel, newStatus: TaskStatus) {
    this.taskMoved.emit({ task, newStatus });
  }

  editTask(task: TaskModel) {
    this.taskEdited.emit(task);
  }

  deleteTask(taskId: number) {
    this.taskDeleted.emit(taskId);
  }

  private readonly columnClassMap: Record<'todo' | 'inProgress' | 'done', string> = {
    'todo': 'column todo-column',
    'inProgress': 'column in-progress-column',
    'done': 'column done-column',
  };

  readonly getColumnClass = computed(() =>
    this.columnClassMap[this.columnType()] ?? 'column'
  );
}
