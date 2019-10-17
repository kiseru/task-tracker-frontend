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
  on(authActions.loginFail, authActions.loadCurrentUserFail, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(authActions.loginSuccess, (state) => ({
    ...state,
    error: initialState.error,
    isLoading: false,
    loginForm: initialState.loginForm
  })),
  on(authActions.loadCurrentUser, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(authActions.loadCurrentUserSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    user,
  })),
  on(authActions.logout, (state) => ({
    ...state,
    isLoading: false,
    user: initialState.user,
  }))
);

export function reducer(state: AuthState, action: Action): AuthState {
  return authReducer(state, action);
}
