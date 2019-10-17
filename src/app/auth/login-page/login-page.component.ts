import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../store/state';
import { login } from '../../store/auth/auth.actions';
import { selectAuthError } from '../../store/auth/auth.selectors';
import { disableHeader, enableHeader } from '../../store/header/header.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(12)]],
    password: ['', [Validators.required, Validators.maxLength(20)]],
  });

  authError$ = this.store.select(selectAuthError);

  constructor(private fb: FormBuilder,
              private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(disableHeader());
  }

  ngOnDestroy(): void {
    this.store.dispatch(enableHeader());
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(login({ loginForm: this.form.value }));
  }

  get username(): AbstractControl {
    return this.form.get('username');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }
}
