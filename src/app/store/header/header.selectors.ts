import { State } from '../state';
import { createSelector } from '@ngrx/store';

export const selectHeaderState = (state: State) => state && state.header;

export const selectHeaderIsShowing = createSelector(selectHeaderState, state => state && state.isShowing);
