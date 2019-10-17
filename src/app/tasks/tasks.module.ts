import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TasksKanbanComponent } from './tasks-kanban/tasks-kanban.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule, MatSelectModule, MatTableModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    TasksPageComponent,
    TasksTableComponent,
    TasksKanbanComponent,
    TaskCardComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    DragDropModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
  ]
})
export class TasksModule { }
