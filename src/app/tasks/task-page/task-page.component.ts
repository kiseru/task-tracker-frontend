import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/state';
import { loadTask } from '../../store/tasks/tasks.actions';
import { ActivatedRoute } from '@angular/router';
import { selectTask } from '../../store/tasks/tasks.selectors';
import { taskPrioritiesCaption, taskStatusesCaption } from '../../entities/task';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  task$ = this.store.pipe(select(selectTask));

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
  ) {
  }

  ngOnInit(): void {
    const taskId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.store.dispatch(loadTask({ taskId }));
  }

  getStatusCaption(index: number): string {
    return taskStatusesCaption[index];
  }

  getPriorityCaption(index: number): string {
    return taskPrioritiesCaption[index];
  }
}
