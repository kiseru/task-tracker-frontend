import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './status.pipe';
import { PriorityPipe } from './priority.pipe';


@NgModule({
  declarations: [
    StatusPipe,
    PriorityPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusPipe,
    PriorityPipe,
  ]
})
export class SharedModule {
}
