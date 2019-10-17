import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './header.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature('header', reducer),
  ]
})
export class HeaderModule { }
