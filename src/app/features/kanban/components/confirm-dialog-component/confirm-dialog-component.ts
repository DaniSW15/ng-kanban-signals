import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 mat-dialog-title>Eliminar Tarea</h2>
    <mat-dialog-content>
      <p>¿Estás seguro de que deseas eliminar esta tarea de forma permanente?</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onDecline()">Cancelar</button>
      <button mat-raised-button color="warn" (click)="onConfirm()">Eliminar</button>
    </mat-dialog-actions>
  `,
  styles: [`
    p { margin-top: 10px; margin-bottom: 20px; }
  `]
})
export class ConfirmDialogComponent {
  dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);

  onConfirm() {
    this.dialogRef.close(true);
  }

  onDecline() {
    this.dialogRef.close(false);
  }
}
