import { TestBed } from '@angular/core/testing';
import { ApplicationRef } from '@angular/core';
import { TaskService } from './task-service';
import { TaskModel } from '../models/task-model';

describe('TaskService', () => {
  let service: TaskService;
  const mockTask: TaskModel = {
    id: 1,
    title: 'Test Task',
    description: 'This is a test task',
    priority: 'medium',
    status: 'toDo'
  };

  beforeEach(() => {
    // Reset local storage before each test
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [TaskService]
    });
    service = TestBed.inject(TaskService);
    // Clear initial mock data to start clean
    service.tasksSignal.set([]);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {
    service.addTask(mockTask);

    const tasks = service.tasksSignal();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Test Task');
    expect(tasks[0].status).toBe('toDo');
    expect(tasks[0].id).toBeDefined();
  });

  it('should delete a task', () => {
    service.addTask(mockTask);
    const taskId = service.tasksSignal()[0].id;

    service.deleteTask(taskId);
    expect(service.tasksSignal().length).toBe(0);
  });

  it('should move a task to a different status', () => {
    service.addTask(mockTask);
    const task = service.tasksSignal()[0];

    service.moveTask(task.id, 'inProgress');

    const updatedTask = service.tasksSignal()[0];
    expect(updatedTask.status).toBe('inProgress');
  });

  it('should update an existing task', () => {
    service.addTask(mockTask);
    const task = service.tasksSignal()[0];

    const updatedTask: TaskModel = { ...task, title: 'Updated Task', priority: 'low' };
    service.updateTask(updatedTask);

    const tasks = service.tasksSignal()[0];
    expect(tasks.title).toBe('Updated Task');
    expect(tasks.priority).toBe('low');
    expect(tasks.description).toBe('This is a test task');
  });

  it('should filter tasks by priority', () => {
    service.addTask({ ...mockTask, priority: 'high' });
    service.addTask({ ...mockTask, priority: 'medium', title: 'Medium Task' });
    service.addTask({ ...mockTask, priority: 'low', title: 'Low Task' });

    service.filterPriority.set('high');
    const filteredTasks = service.filteredTasks();

    expect(filteredTasks.length).toBe(1);
    expect(filteredTasks[0].priority).toBe('high');
  });

  it('should persist tasks in local storage', () => {
    service.addTask(mockTask);
    TestBed.inject(ApplicationRef).tick();

    const stored = localStorage.getItem('kanban_tasks');
    expect(stored).toBeTruthy();
    expect(JSON.parse(stored!).length).toBe(1);
  });
});
