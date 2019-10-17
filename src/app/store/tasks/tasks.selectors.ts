import { State } from '../state';
import { createSelector } from '@ngrx/store';

export const selectTasksState = (state: State) => state && state.tasks;

export const selectTasksError = createSelector(selectTasksState, state => state.error);

export const selectTasksIsLoading = createSelector(selectTasksState, state => state.isLoading);

export const selectTasks = createSelector(selectTasksState, (state) => state && state.tasks);

export const selectTask = createSelector(selectTasksState, (state) => state && state.current);
