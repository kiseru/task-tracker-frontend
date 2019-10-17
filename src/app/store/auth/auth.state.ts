import { LoginForm } from '../../entities/login-form';
import { User } from '../../entities/user';

export interface AuthState {
  error: any;
  isLoading: boolean;
  loginForm: LoginForm;
  user: User;
}

export const initialState: AuthState = {
  error: null,
  isLoading: false,
  loginForm: null,
  user: null,
};
