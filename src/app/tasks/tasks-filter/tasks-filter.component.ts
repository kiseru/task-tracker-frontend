import { Component, OnInit } from '@angular/core';
import { TaskFilters, taskPrioritiesCaption, taskStatusesCaption } from '../../entities/task';
import { State } from '../../store/state';
import { Store } from '@ngrx/store';
import { loadTasks } from '../../store/tasks/tasks.actions';

@Component({
  selector: 'app-tasks-filter',
  templateUrl: './tasks-filter.component.html',
  styleUrls: ['./tasks-filter.component.scss']
})
export class TasksFilterComponent implements OnInit {
  filters: TaskFilters = {
    priority: -1,
    status: -1,
  };

  readonly priorities = Object.entries(taskPrioritiesCaption)
    .map(priority => ({ id: parseInt(priority[0], 10), caption: priority[1] }));

  readonly statuses = Object.entries(taskStatusesCaption)
    .map(status => ({ id: parseInt(status[0], 10), caption: status[1] }));

  constructor(
    private store: Store<State>,
  ) {
  }

  ngOnInit() {
  }

  filterChanges(): void {
    const filters: Partial<TaskFilters> = {
      priority: this.filters.priority !== -1 ? this.filters.priority : null,
      status: this.filters.status !== -1 ? this.filters.status : null,
    };
    this.store.dispatch(loadTasks({ filters }));
  }
}
