import { AuthState } from './auth/auth.state';
import { TasksState } from './tasks/tasks.state';
import { HeaderState } from './header/header.state';

export interface State {
  auth: AuthState;
  header: HeaderState;
  tasks: TasksState;
}
