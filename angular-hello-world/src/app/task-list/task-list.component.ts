import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  taks = [];
  task: Task = {
    name: '',
    value: 0,
    dateLaunch: ''
  };

  add() {
    const task = Object.assign({}, this.task);
    this.taks.push(task);
  }

}
