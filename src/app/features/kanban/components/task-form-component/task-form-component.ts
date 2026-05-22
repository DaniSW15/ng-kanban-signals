import { Component, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { form, FormField, FormRoot, required, minLength } from '@angular/forms/signals';
import { TaskFormSignal } from '../../models/task-model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-task-form-component',
  imports: [
    FormField,
    FormRoot,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-form-component.html',
  styleUrl: './task-form-component.scss',
})
export class TaskFormComponent {
  taskCreated = output<TaskFormSignal>();

  taskModel = signal<TaskFormSignal>({
    title: '',
    description: '',
    priority: 'medium',
  });

  taskFormSignal = form(
    this.taskModel,
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
            this.taskCreated.emit(field().value() as TaskFormSignal);
            field().reset({ title: '', description: '', priority: 'medium' });
          }
        },
      },
    }
  );
}
