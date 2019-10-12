import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TasksModule } from './tasks/tasks.module';


@NgModule({
  imports: [
    AuthModule,
    TasksModule,
    NgRxStoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ]
})
export class StoreModule { }
