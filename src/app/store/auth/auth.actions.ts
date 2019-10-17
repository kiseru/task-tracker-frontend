import { createAction, props } from '@ngrx/store';
import { LoginForm } from '../../entities/login-form';
import { Token } from '../../entities/token';
import { User } from '../../entities/user';

export const login = createAction('[Auth] Login', props<{ loginForm: LoginForm }>());
export const loginFail = createAction('[Auth] Login Fail', props<{ error: any }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: Token }>());
export const logout = createAction('[Auth] Logout');
export const loadCurrentUser = createAction('[Auth] Load Current User');
export const loadCurrentUserFail = createAction('[Auth] Load Current User Fail', props<{ error: any }>());
export const loadCurrentUserSuccess = createAction('[Auth] Load Current User Success', props<{ user: User }>());
