import { Pipe, PipeTransform } from '@angular/core';
import { taskStatusesCaption } from '../entities/task';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(statusId: number): string {
    return taskStatusesCaption[statusId];
  }
}
