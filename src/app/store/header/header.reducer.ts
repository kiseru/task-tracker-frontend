import { Action, createReducer, on } from '@ngrx/store';
import { HeaderState, initialState } from './header.state';
import { disableHeader, enableHeader } from './header.actions';

const headerReducer = createReducer(
  initialState,
  on(enableHeader, (state) => ({
    ...state,
    isShowing: true,
  })),
  on(disableHeader, (state) => ({
    ...state,
    isShowing: false,
  })),
);

export function reducer(state: HeaderState, action: Action): HeaderState {
  return headerReducer(state, action);
}
