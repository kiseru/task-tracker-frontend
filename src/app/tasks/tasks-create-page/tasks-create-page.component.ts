import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task } from '../../entities/task';
import { State } from '../../store/state';
import { Store } from '@ngrx/store';
import { createTask } from '../../store/tasks/tasks.actions';

@Component({
  selector: 'app-tasks-create-page',
  templateUrl: './tasks-create-page.component.html',
  styleUrls: ['./tasks-create-page.component.scss']
})
export class TasksCreatePageComponent {

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
  ) {
  }

  submit(task: Task): void {
    this.store.dispatch(createTask({ task }));
  }
}
