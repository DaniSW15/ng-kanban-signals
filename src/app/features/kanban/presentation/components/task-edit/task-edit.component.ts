import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { TaskFormData, Task } from '../../../domain/models/task.model';
import { form, required, minLength, FormField, FormRoot } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-task-edit',
    imports: [
        FormRoot,
        FormField,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './task-edit.component.html',
    styleUrl: './task-edit.component.scss',
})
export class TaskEditComponent {
    readonly dialogRef = inject(MatDialogRef<TaskEditComponent>);
    readonly data = inject(MAT_DIALOG_DATA) as { task: Task };

    private readonly editModel = signal<TaskFormData>({
        title: this.data.task.title,
        description: this.data.task.description,
        priority: this.data.task.priority,
    });

    readonly editForm = form(
        this.editModel,
        (s) => {
            required(s.title);
            minLength(s.title, 3, { message: 'El título debe tener al menos 3 caracteres' });
            required(s.description);
            minLength(s.description, 10, { message: 'La descripción debe tener al menos 10 caracteres' });
        },
        {
            submission: {
                action: async (field) => {
                    if (field().valid()) {
                        const updated: Task = { ...this.data.task, ...(field().value() as TaskFormData) };
                        this.dialogRef.close(updated);
                    }
                },
            },
        }
    );

    closeModal(): void {
        this.dialogRef.close(null);
    }
}
