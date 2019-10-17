import { Component } from '@angular/core';
import { selectHeaderIsShowing } from '../../store/header/header.selectors';
import { Store } from '@ngrx/store';
import { State } from '../../store/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShowing$ = this.store.select(selectHeaderIsShowing);

  constructor(
    private store: Store<State>,
  ) {
  }
}
