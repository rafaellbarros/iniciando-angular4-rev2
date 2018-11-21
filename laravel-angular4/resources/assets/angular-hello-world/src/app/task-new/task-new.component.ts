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
    date_launch: '2018-11-11'
  };

  tasks: Array<Task>;

  constructor(private taskService: TaskService) { }

  add() {
    this.taskService.createTask(this.task)
      .then(() => alert('Tarefal incluida com sucesso!'));
  }

}
