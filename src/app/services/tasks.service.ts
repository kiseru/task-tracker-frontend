import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../entities/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly BASE_URL = 'tasks/';

  constructor(
    private http: HttpClient,
  ) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.BASE_URL);
  }
}
