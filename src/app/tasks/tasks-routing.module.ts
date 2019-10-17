import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { TaskPageComponent } from './task-page/task-page.component';
import { TasksCreatePageComponent } from './tasks-create-page/tasks-create-page.component';
import { TasksUpdatePageComponent } from './tasks-update-page/tasks-update-page.component';


const routes: Routes = [
  { path: '', component: TasksPageComponent, canActivate: [AuthGuard] },
  { path: 'new', component: TasksCreatePageComponent, canActivate: [AuthGuard] },
  { path: ':id', component: TaskPageComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: TasksUpdatePageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
