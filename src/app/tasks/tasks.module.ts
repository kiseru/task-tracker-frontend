import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TasksKanbanComponent } from './tasks-kanban/tasks-kanban.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { TaskPageComponent } from './task-page/task-page.component';
import { TasksCreatePageComponent } from './tasks-create-page/tasks-create-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksUpdatePageComponent } from './tasks-update-page/tasks-update-page.component';


@NgModule({
  declarations: [
    TasksPageComponent,
    TasksTableComponent,
    TasksKanbanComponent,
    TaskCardComponent,
    TaskPageComponent,
    TasksCreatePageComponent,
    TasksFormComponent,
    TasksUpdatePageComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    DragDropModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
  ]
})
export class TasksModule { }
