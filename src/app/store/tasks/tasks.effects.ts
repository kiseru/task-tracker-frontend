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
    .pipe(switchMap(action => this.tasksService.getTasks(action.filters)
      .pipe(map(tasks => tasksActions.loadTasksSuccess({ tasks })))
      .pipe(catchError(error => of(tasksActions.loadTasksFail({ error })))))));

  editTaskStatus$ = createEffect(() => this.actions$
    .pipe(ofType(tasksActions.editTaskStatus))
    .pipe(switchMap(action => this.tasksService.editTaskStatus(action.taskId, action.status)
      .pipe(map(() => tasksActions.editTaskStatusSuccess()))
      .pipe(catchError(error => of(tasksActions.editTaskStatusFail({ error })))))));

  loadTask$ = createEffect(() => this.actions$
    .pipe(ofType(tasksActions.loadTask))
    .pipe(switchMap(action => this.tasksService.getTask(action.taskId)
      .pipe(map(task => tasksActions.loadTaskSuccess({ task })))
      .pipe(catchError(error => of(tasksActions.loadTaskFail({ error })))))));
}
