import { Action, createReducer, on } from '@ngrx/store';
import { initialState, TasksState } from './tasks.state';
import {
  editTaskStatus,
  editTaskStatusFail,
  editTaskStatusSuccess,
  loadTask,
  loadTaskFail,
  loadTasks,
  loadTasksFail,
  loadTasksSuccess,
  loadTaskSuccess
} from './tasks.actions';

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
  on(editTaskStatus, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(editTaskStatusFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(editTaskStatusSuccess, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(loadTask, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadTaskFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(loadTaskSuccess, (state, { task }) => ({
    ...state,
    isLoading: false,
    current: task,
  })),
);

export function reducer(state: TasksState, action: Action): TasksState {
  return tasksReducer(state, action);
}
