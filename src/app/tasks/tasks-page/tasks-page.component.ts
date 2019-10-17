import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/state';
import { loadTasks } from '../../store/tasks/tasks.actions';
import { selectTasks } from '../../store/tasks/tasks.selectors';
import { TaskFilters, taskPrioritiesCaption, taskStatusesCaption } from '../../entities/task';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
  viewType: 'full' | 'short' | 'kanban' = 'full';
  tasks$ = this.store
    .pipe(select(selectTasks));

  filters: TaskFilters = {
    priority: -1,
    status: -1,
  };

  readonly priorities = Object.keys(taskPrioritiesCaption)
    .map(key => +key);

  readonly statuses = Object.keys(taskStatusesCaption)
    .map(key => +key);

  constructor(
    private store: Store<State>,
  ) {
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    const filters: Partial<TaskFilters> = {
      priority: this.filters.priority !== -1 ? this.filters.priority : null,
      status: this.filters.status !== -1 ? this.filters.status : null,
    };
    this.store.dispatch(loadTasks({ filters }));
  }
}
