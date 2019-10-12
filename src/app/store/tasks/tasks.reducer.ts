import { Action, createReducer, on } from '@ngrx/store';
import { initialState, TasksState } from './tasks.state';
import { loadTasks, loadTasksFail, loadTasksSuccess } from './tasks.actions';

const tasksReducer = createReducer(
  initialState,
  on(loadTasks, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(loadTasksFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    isLoading: false,
  })),
);

export function reducer(state: TasksState, action: Action): TasksState {
  return tasksReducer(state, action);
}
