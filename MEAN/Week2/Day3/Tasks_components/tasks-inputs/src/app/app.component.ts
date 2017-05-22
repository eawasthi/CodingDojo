import { Component } from '@angular/core';
import { Task } from "./task"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tasks: Task[] = [
  	{title: "First task", completed:false},
  	{title: "Second task", completed:false},
  	{title: "Third task", completed:false}
  ]
  constructor(){}
}
