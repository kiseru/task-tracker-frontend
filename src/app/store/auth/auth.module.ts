import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './auth.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class AuthModule { }
