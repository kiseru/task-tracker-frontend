import { createAction, props } from '@ngrx/store';
import { Task, TaskFilters } from '../../entities/task';

export const loadTasks = createAction('[Tasks] Load Tasks', props<{ filters?: Partial<TaskFilters> }>());

export const loadTasksFail = createAction('[Tasks] Load Tasks Fail', props<{ error: any }>());

export const loadTasksSuccess = createAction('[Tasks] Load Tasks Success', props<{ tasks: Task[] }>());

export const editTaskStatus = createAction('[Tasks] Edit Task', props<{ taskId: number, status: number }>());

export const editTaskStatusFail = createAction('[Tasks] Edit Task', props<{ error: any }>());

export const editTaskStatusSuccess = createAction('[Tasks] Edit Task');

export const loadTask = createAction('[Tasks] Load Task', props<{ taskId: number }>());

export const loadTaskFail = createAction('[Tasks] Load Task Fail', props<{ error: any }>());

export const loadTaskSuccess = createAction('[Tasks] Load Task Success', props<{ task: Task }>());

export const createTask = createAction('[Tasks] Create Task', props<{ task: Task }>());

export const createTaskFail = createAction('[Tasks] Create Task Fail', props<{ error: any }>());

export const createTaskSuccess = createAction('[Tasks] Create Task Success');

export const updateTask = createAction('[Tasks] Update Task', props<{ task: Task }>());

export const updateTaskFail = createAction('[Tasks] Update Task Fail', props<{ error: any }>());

export const updateTaskSuccess = createAction('[Tasks] Update Task Success');

