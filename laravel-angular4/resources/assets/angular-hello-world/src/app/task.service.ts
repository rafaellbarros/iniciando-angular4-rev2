import { Injectable } from '@angular/core';
import { Task } from './task';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {

  private URL = 'http://localhost:8000';

  constructor(private http: Http) { }

  public getTasks(): Promise<Array<Task>> {
    return this.http.get(`${this.URL}/tasks`)
      .toPromise()
      .then( response => response.json());
  }

  public createTask(task: Task) {
    return this.http.post(`${this.URL}/tasks`, task)
      .toPromise();
  }

}
