import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  taks = [];
  task = '';

  add() {
    this.taks.push(this.task);
  }

}
