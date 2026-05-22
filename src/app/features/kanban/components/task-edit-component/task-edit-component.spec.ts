import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditComponent } from './task-edit-component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            task: {
              id: 1,
              title: 'Test Task',
              description: 'Test Description',
              priority: 'medium',
              status: 'toDo'
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
