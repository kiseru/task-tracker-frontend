import { Task } from 'src/app/entities/task';

export interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  error: any;
}

export const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  error: null,
};

