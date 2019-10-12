import { createAction, props } from '@ngrx/store';
import { Task } from '../../entities/task';

export const loadTasks = createAction('[Tasks] Load Tasks');

export const loadTasksFail = createAction('[Tasks] Load Tasks Fail', props<{ error: any }>());

export const loadTasksSuccess = createAction('[Tasks] Load Tasks Success', props<{ tasks: Task[] }>());

