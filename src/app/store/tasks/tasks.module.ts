import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './tasks.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './tasks.effects';


@NgModule({
  imports: [
    StoreModule.forFeature('tasks', reducer),
    EffectsModule.forFeature([TasksEffects])
  ]
})
export class TasksModule {
}
