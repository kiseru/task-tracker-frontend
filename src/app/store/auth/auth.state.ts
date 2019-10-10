import { LoginForm } from '../../entities/login-form';

export interface AuthState {
  error: any;
  isLoading: boolean;
  loginForm: LoginForm;
}

export const initialState: AuthState = {
  error: null,
  isLoading: false,
  loginForm: null,
};
