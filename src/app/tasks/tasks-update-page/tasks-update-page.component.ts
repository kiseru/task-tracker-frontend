import { Component, OnInit } from '@angular/core';
import { State } from '../../store/state';
import { select, Store } from '@ngrx/store';
import { selectTask } from '../../store/tasks/tasks.selectors';
import { ActivatedRoute } from '@angular/router';
import { loadTask, updateTask } from '../../store/tasks/tasks.actions';
import { Task } from 'src/app/entities/task';

@Component({
  selector: 'app-tasks-update-page',
  templateUrl: './tasks-update-page.component.html',
  styleUrls: ['./tasks-update-page.component.scss']
})
export class TasksUpdatePageComponent implements OnInit {

  task$ = this.store.pipe(select(selectTask));

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
  ) {
  }

  ngOnInit(): void {
    const taskId = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(loadTask({ taskId }));
  }

  submit(task: Task): void {
    this.store.dispatch(updateTask({ task }));
  }
}
