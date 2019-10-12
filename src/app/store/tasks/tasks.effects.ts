import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TasksService } from '../../services/tasks.service';
import * as tasksActions from './tasks.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TasksEffects {

  constructor(
    private actions$: Actions,
    private tasksService: TasksService,
  ) {
  }

  loadTasks$ = createEffect(() => this.actions$
    .pipe(ofType(tasksActions.loadTasks))
    .pipe(switchMap(() => this.tasksService.getTasks()
      .pipe(map(tasks => tasksActions.loadTasksSuccess({ tasks })))
      .pipe(catchError(error => of(tasksActions.loadTasksFail({ error })))))));
}
