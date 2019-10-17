import { Task, TaskFilters } from 'src/app/entities/task';

export interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  error: any;
  filters: Partial<TaskFilters>;
  current: Task;
}

export const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  error: null,
  filters: null,
  current: null,
};

