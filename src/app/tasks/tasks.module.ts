import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { MatTableModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [TasksPageComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class TasksModule { }
