import { Action, createReducer, on } from '@ngrx/store';
import { initialState, TasksState } from './tasks.state';
import {
  createTask,
  createTaskFail,
  createTaskSuccess,
  editTaskStatus,
  editTaskStatusFail,
  editTaskStatusSuccess,
  loadTask,
  loadTaskFail,
  loadTasks,
  loadTasksFail,
  loadTasksSuccess,
  loadTaskSuccess,
  updateTask,
  updateTaskFail,
  updateTaskSuccess
} from './tasks.actions';

const tasksReducer = createReducer(
  initialState,
  on(loadTasks, editTaskStatus, loadTask, createTask, updateTask, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(loadTasksFail, editTaskStatusFail, loadTaskFail, createTaskFail, updateTaskFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    isLoading: false,
  })),
  on(editTaskStatusSuccess, createTaskSuccess, updateTaskSuccess, (state) => ({
    ...state,
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
