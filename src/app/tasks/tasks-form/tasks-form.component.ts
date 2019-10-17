import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Task, taskPrioritiesCaption, taskStatusesCaption } from '../../entities/task';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {
  @Input() task: Task = null;
  @Output() submitForm = new EventEmitter<Task>();

  form = this.fb.group({
    id: [null],
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
  ) {
  }

  ngOnInit(): void {
    if (this.task) {
      this.form.patchValue(this.task);
    }
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitForm.emit(this.form.value);
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
