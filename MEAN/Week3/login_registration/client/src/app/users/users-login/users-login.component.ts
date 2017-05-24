import { User } from './../user';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
  @Input() all_users

  new_user = new User
  @Output() refresh = new EventEmitter
  constructor(private usersService: UsersService) { }
 
  ngOnInit() {

  }
  registerUser(){
    console.log("The user you registered is:", this.new_user)
    this.usersService.create_User(this.new_user)
      .then((data) => {
        this.new_user = new User
        this.refresh.emit()
      })
      .catch((err) => {console.log(err)})
  }
}
