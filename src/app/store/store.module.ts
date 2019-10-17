import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TasksModule } from './tasks/tasks.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  imports: [
    AuthModule,
    HeaderModule,
    TasksModule,
    NgRxStoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ]
})
export class StoreModule { }
