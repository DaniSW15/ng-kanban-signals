import { Task } from '../models/task.model';

/**
 * Contrato de acceso a datos para las tareas.
 * La capa de aplicación depende de esta abstracción, no de implementaciones concretas.
 * Principio de Inversión de Dependencias (DIP).
 */
export abstract class TaskRepository {
  abstract getAll(): Task[];
  abstract save(tasks: Task[]): void;
}
