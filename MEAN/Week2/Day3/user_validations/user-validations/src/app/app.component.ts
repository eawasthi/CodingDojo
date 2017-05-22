import { Component } from '@angular/core';
import {Users} from './users'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Better to import the User class and create a default instance in the component.
  user = {  
    first_name:"", 
    last_name:"",
    email:"",
    password:""
  }
  constructor() { };
  onSubmit(form: NgForm){
    console.log(form);
  }
}


