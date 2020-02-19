import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TasksKanbanComponent } from './tasks-kanban/tasks-kanban.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskPageComponent } from './task-page/task-page.component';
import { TasksCreatePageComponent } from './tasks-create-page/tasks-create-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksUpdatePageComponent } from './tasks-update-page/tasks-update-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class TasksModule { }
