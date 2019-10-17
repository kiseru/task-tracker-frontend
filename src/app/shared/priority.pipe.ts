import { Pipe, PipeTransform } from '@angular/core';
import { taskPrioritiesCaption } from '../entities/task';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(priorityId: number): string {
    return taskPrioritiesCaption[priorityId];
  }
}
