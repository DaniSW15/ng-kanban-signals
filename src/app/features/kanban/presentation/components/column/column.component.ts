import { Component, input, output, ChangeDetectionStrategy, computed } from '@angular/core';
import { Task, TaskStatus } from '../../../domain/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-column',
    imports: [TaskCardComponent, CdkDrag],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './column.component.html',
    styleUrl: './column.component.scss',
})
export class ColumnComponent {
    title = input<string>('');
    tasks = input<Task[]>([]);
    emptyStateMessage = input<string>('');
    columnType = input<'todo' | 'inProgress' | 'done'>('todo');

    taskMoved = output<{ task: Task; newStatus: TaskStatus }>();
    taskEdited = output<Task>();
    taskDeleted = output<number>();

    private readonly columnClassMap: Record<'todo' | 'inProgress' | 'done', string> = {
        todo: 'column todo-column',
        inProgress: 'column in-progress-column',
        done: 'column done-column',
    };

    readonly columnClass = computed(() => this.columnClassMap[this.columnType()] ?? 'column');

    onMove(task: Task, newStatus: TaskStatus): void {
        this.taskMoved.emit({ task, newStatus });
    }

    onEdit(task: Task): void {
        this.taskEdited.emit(task);
    }

    onDelete(id: number): void {
        this.taskDeleted.emit(id);
    }
}
