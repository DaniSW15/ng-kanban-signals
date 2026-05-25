import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { TaskStore } from '../../../application/task.store';
import { ThemeService } from '../../../../../core/theme-service/theme-service';
import { Priority, Task, TaskFormData, TaskStatus } from '../../../domain/models/task.model';
import { ColumnComponent } from '../../components/column/column.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { TaskEditComponent } from '../../components/task-edit/task-edit.component';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-kanban-page',
    imports: [
        ColumnComponent,
        TaskFormComponent,
        CdkDropList,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './kanban-page.component.html',
    styleUrl: './kanban-page.component.scss',
})
export class KanbanPageComponent {
    readonly store = inject(TaskStore);
    readonly themeService = inject(ThemeService);
    private readonly dialog = inject(MatDialog);
    private readonly announcer = inject(LiveAnnouncer);

    private readonly statusLabelMap: Record<TaskStatus, string> = {
        toDo: 'Por Hacer',
        inProgress: 'En Progreso',
        done: 'Hecho',
    };

    private readonly columnStatusMap: Record<string, TaskStatus> = {
        todo: 'toDo',
        inProgress: 'inProgress',
        done: 'done',
    };

    changeFilter(priority: Priority | 'all'): void {
        this.store.filterPriority.set(priority);
    }

    onTaskCreated(data: TaskFormData): void {
        this.store.addTask(data);
    }

    moveTask(task: Task, status: TaskStatus): void {
        this.store.moveTask(task.id, status);
        this.announcer.announce(`"${task.title}" movida a ${this.statusLabelMap[status]}`);
    }

    onDrop(event: CdkDragDrop<Task[]>, columnType: string): void {
        if (event.previousContainer !== event.container) {
            const task = event.item.data as Task;
            const newStatus = this.columnStatusMap[columnType] ?? 'toDo';
            this.moveTask(task, newStatus);
        }
    }

    deleteTask(id: number): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, { width: '350px' });
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            if (confirmed) {
                this.store.deleteTask(id);
                this.announcer.announce('Tarea eliminada');
            }
        });
    }

    editTask(task: Task): void {
        const dialogRef = this.dialog.open(TaskEditComponent, {
            width: '400px',
            data: { task },
        });
        dialogRef.afterClosed().subscribe((updated: Task | null) => {
            if (updated) this.store.updateTask(updated);
        });
    }
}
