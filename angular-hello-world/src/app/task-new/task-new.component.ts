import { TaskService } from './../task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent {

  task: Task = {
    name: '',
    value: 0,
    dateLaunch: '2018-11-11'
  };

  tasks: Array<Task>;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.tasks;
  }

  add() {
    const task = Object.assign({}, this.task);
    this.tasks.push(task);
  }

}
