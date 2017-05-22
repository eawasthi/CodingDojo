import { Component } from '@angular/core';
import {User} from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  users : User[] = [
  	{name: "Kevin", date: new Date}, 
  	{name: "John", date: new Date}, 
  	{name: "Adam", date: new Date}, 
  	{name: "Jack", date: new Date}, 
  	{name: "Ekta", date: new Date}, 
  ]
  constructor(){}
}
