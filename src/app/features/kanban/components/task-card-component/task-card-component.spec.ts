import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardComponent } from './task-card-component';
import { ComponentRef } from '@angular/core';
import { TaskModel } from '../../models/task-model';

describe('TaskCardComponent', () => {
  let component: TaskCardComponent;
  let fixture: ComponentFixture<TaskCardComponent>;
  let componentRef: ComponentRef<TaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCardComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    
    // Set required signal input
    componentRef.setInput('task', {
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      priority: 'medium',
      status: 'toDo'
    } as TaskModel);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
