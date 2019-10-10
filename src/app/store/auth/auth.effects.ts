import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }

  login$ = createEffect(() => this.actions$
    .pipe(ofType(authActions.login))
    .pipe(switchMap(action => this.authService.login(action.loginForm)
      .pipe(map(token => authActions.loginSuccess({ token })))
      .pipe(catchError(error => of(authActions.loginFail({ error })))))));

  loginSuccess$ = createEffect(() => this.actions$
    .pipe(ofType(authActions.loginSuccess))
    .pipe(tap(action => {
      this.authService.setAuthToken(action.token);
      this.router.navigateByUrl('/');
    })), { dispatch: false });
}
