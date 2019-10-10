import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [
    AuthModule,
    NgRxStoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ]
})
export class StoreModule { }
