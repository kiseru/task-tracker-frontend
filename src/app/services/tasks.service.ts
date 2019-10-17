import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task, TaskFilters } from '../entities/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly BASE_URL = 'tasks/';

  constructor(
    private http: HttpClient,
  ) {
  }

  getTasks(taskFilters?: Partial<TaskFilters>): Observable<Task[]> {
    let params = new HttpParams();
    if (taskFilters) {
      Object.entries(taskFilters)
        .filter(([_, value]) => value !== null && value !== undefined)
        .forEach(([key, value]) => params = params.set(key, value.toString()));
    }
    return this.http.get<Task[]>(this.BASE_URL, { params });
  }

  editTaskStatus(taskId: number, status: number): Observable<Task> {
    return this.http.patch<Task>(`${this.BASE_URL}${taskId}/`, { status });
  }

  getTask(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.BASE_URL}${taskId}/`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.BASE_URL}`, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.BASE_URL}${task.id}/`, task);
  }
}
