import { Component, Input } from '@angular/core';
import { Task, taskPrioritiesCaption, taskStatusesCaption } from '../../entities/task';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent {
  @Input() tasks: Task[];
  @Input() isShortView = false;

  fullDisplayedColumns = [
    'name',
    'description',
    'estimation',
    'spent_time',
    'priority',
    'status',
  ];

  shortDisplayColumns = [
    'name',
    'priority',
    'status'
  ];

  getStatusCaption(index: number): string {
    return taskStatusesCaption[index];
  }

  getPriorityCaption(index: number): string {
    return taskPrioritiesCaption[index];
  }

  get displayedColumns(): string[] {
    return this.isShortView ? this.shortDisplayColumns : this.fullDisplayedColumns;
  }
}
