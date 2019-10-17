import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/entities/task';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { State } from '../../store/state';
import { Store } from '@ngrx/store';
import { editTaskStatus } from '../../store/tasks/tasks.actions';

@Component({
  selector: 'app-tasks-kanban',
  templateUrl: './tasks-kanban.component.html',
  styleUrls: ['./tasks-kanban.component.scss']
})
export class TasksKanbanComponent {
  @Input() tasks: Task[];
  @Output() tasksUpdate = new EventEmitter();

  constructor(
    private store: Store<State>
  ) {
  }

  get todoTasks(): Task[] {
    return this.tasks.filter(task => task.status === 0);
  }

  get inProgressTasks(): Task[] {
    return this.tasks.filter(task => task.status === 1);
  }

  get doneTasks(): Task[] {
    return this.tasks.filter(task => task.status === 2);
  }

  drop(event: CdkDragDrop<any[]>, status: number): void {
    this.store.dispatch(editTaskStatus({ taskId: event.item.data.id, status }));
    this.tasksUpdate.emit();
  }
}
