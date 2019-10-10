import { State } from '../state';
import { createSelector } from '@ngrx/store';

export const selectAuthState = (state: State) => state && state.auth;

export const selectAuthError = createSelector(selectAuthState, state => state.error);

export const selectAuthIsLoading = createSelector(selectAuthState, state => state.isLoading);
