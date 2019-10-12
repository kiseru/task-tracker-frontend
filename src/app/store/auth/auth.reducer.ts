import { Action, createReducer, on } from '@ngrx/store';
import { AuthState, initialState } from './auth.state';
import * as authActions from './auth.actions';

const authReducer = createReducer(
  initialState,
  on(authActions.login, (state, { loginForm }) => ({
    ...state,
    error: initialState.error,
    isLoading: true,
    loginForm,
  })),
  on(authActions.loginFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
    loginForm: initialState.loginForm,
  })),
  on(authActions.loginSuccess, (state) => ({
    ...state,
    error: initialState.error,
    isLoading: false,
    loginForm: initialState.loginForm
  })),
);

export function reducer(state: AuthState, action: Action): AuthState {
  return authReducer(state, action);
}
