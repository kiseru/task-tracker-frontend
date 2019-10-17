import { Component } from '@angular/core';
import { selectHeaderIsShowing } from '../../store/header/header.selectors';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/state';
import { logout } from '../../store/auth/auth.actions';
import { selectCurrentUser } from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShowing$ = this.store.pipe(select(selectHeaderIsShowing));
  currentUser$ = this.store.pipe(select(selectCurrentUser));

  constructor(
    private store: Store<State>,
  ) {
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
