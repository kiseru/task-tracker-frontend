import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/state';
import { loadTasks } from '../../store/tasks/tasks.actions';
import { selectTasks } from '../../store/tasks/tasks.selectors';
import { taskPrioritiesCaption, taskStatusesCaption } from '../../entities/task';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  displayedColumns = [
    'name',
    'description',
    'estimation',
    'spent_time',
    'priority',
    'status',
  ];

  tasks$ = this.store
    .pipe(select(selectTasks));

  constructor(
    private store: Store<State>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadTasks({}));
  }

  getStatusCaption(index: number): string {
    return taskStatusesCaption[index];
  }

  getPriorityCaption(index: number): string {
    return taskPrioritiesCaption[index];
  }
}
