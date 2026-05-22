import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { TaskFormSignal, TaskModel } from '../../models/task-model';
import { form, required, minLength, FormField, FormRoot } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-task-edit-component',
  imports: [
    FormRoot,
    FormField,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-edit-component.html',
  styleUrl: './task-edit-component.scss',
})
export class TaskEditComponent {
  // Inyectamos la referencia del modal para poder cerrarlo
  dialogRef = inject(MatDialogRef<TaskEditComponent>);

  // Inyectamos los datos que le pasaremos desde el Kanban
  data = inject(MAT_DIALOG_DATA) as { task: TaskModel };

  editModel = signal<TaskFormSignal>({
    title: this.data.task.title,
    description: this.data.task.description,
    priority: this.data.task.priority,
  });

  editFormSignal = form(
    this.editModel,
    (schemaPath) => {
      required(schemaPath.title);
      minLength(schemaPath.title, 3, { message: 'El título debe tener al menos 3 caracteres' });
      required(schemaPath.description);
      minLength(schemaPath.description, 10, { message: 'La descripción debe tener al menos 10 caracteres' });
    },
    {
      submission: {
        action: async (field) => {
          if (field().valid()) {
            const updatedTask: TaskModel = {
              ...this.data.task,
              ...(field().value() as TaskFormSignal),
            };

            // Cerramos el modal pasando la tarea editada
            this.dialogRef.close(updatedTask);
          }
        },
      },
    }
  );

  closeModal() {
    this.dialogRef.close();
  }
}
