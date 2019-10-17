import { Component, Input } from '@angular/core';
import { Task, taskPrioritiesCaption } from 'src/app/entities/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task: Task;

  getPriorityCaption(index: number): string {
    return taskPrioritiesCaption[index];
  }
}
