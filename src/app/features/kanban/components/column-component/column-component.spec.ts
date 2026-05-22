import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnComponent } from './column-component';
import { ComponentRef } from '@angular/core';

describe('ColumnComponent', () => {
  let component: ColumnComponent;
  let fixture: ComponentFixture<ColumnComponent>;
  let componentRef: ComponentRef<ColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('title', 'Test Column');
    componentRef.setInput('tasks', []);
    componentRef.setInput('emptyStateMessage', 'No tasks');
    componentRef.setInput('columnType', 'toDo');

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
