import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { taskPrioritiesCaption, taskStatusesCaption } from '../../entities/task';
import { State } from '../../store/state';
import { Store } from '@ngrx/store';
import { createTask } from '../../store/tasks/tasks.actions';

@Component({
  selector: 'app-tasks-create-page',
  templateUrl: './tasks-create-page.component.html',
  styleUrls: ['./tasks-create-page.component.scss']
})
export class TasksCreatePageComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(200)]],
    description: ['', [Validators.required]],
    estimation: ['', [Validators.required, Validators.pattern(/\d{2}:\d{2}:\d{2}/)]],
    spent_time: ['', [Validators.pattern(/\d{2}:\d{2}:\d{2}/)]],
    status: ['', [Validators.required]],
    priority: ['', [Validators.required]],
  });

  readonly priorities = Object.keys(taskPrioritiesCaption)
    .map(key => +key);

  readonly statuses = Object.keys(taskStatusesCaption)
    .map(key => +key);

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
  ) {
  }

  ngOnInit() {
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(createTask({ task: this.form.value }));
  }

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  get estimation(): AbstractControl {
    return this.form.get('estimation');
  }

  get spentTime(): AbstractControl {
    return this.form.get('spent_time');
  }

  get priority(): AbstractControl {
    return this.form.get('priority');
  }

  get status(): AbstractControl {
    return this.form.get('status');
  }
}
