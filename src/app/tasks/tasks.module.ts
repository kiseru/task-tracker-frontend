import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { MatCardModule, MatSelectModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { TasksFilterComponent } from './tasks-filter/tasks-filter.component';


@NgModule({
  declarations: [TasksPageComponent, TasksFilterComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class TasksModule { }
