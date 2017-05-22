import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../../task'
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
	@Input() task: Task
	@Output() updateTasksList = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  update(){
    this.task.completed = ! this.task.completed
  }
}


