import { createAction, props } from '@ngrx/store';
import { LoginForm } from '../../entities/login-form';
import { Token } from '../../entities/token';

export const login = createAction('[Auth] Login', props<{ loginForm: LoginForm }>());
export const loginFail = createAction('[Auth] Login Fail', props<{ error: any }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: Token }>());
