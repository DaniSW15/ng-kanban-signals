import { TaskModel } from './task-model';

describe('TaskModel', () => {
  it('should create an instance', () => {
    const task: TaskModel = {
      id: 1,
      title: 'Test',
      description: 'Test desc',
      priority: 'low',
      status: 'toDo'
    };
    expect(task).toBeTruthy();
  });
});
