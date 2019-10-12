import { AuthState } from './auth/auth.state';
import { TasksState } from './tasks/tasks.state';

export interface State {
  auth: AuthState;
  tasks: TasksState;
}
