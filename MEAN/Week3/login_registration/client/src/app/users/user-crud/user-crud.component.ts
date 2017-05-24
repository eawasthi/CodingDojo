import { User } from '../user';
import { UsersService } from '../users.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {
  @Input() allusers
  @Output() refresh = new EventEmitter


  selectedUser;
  inspectedID;
  constructor(private UsersService: UsersService) { }

  ngOnInit() {
  }

inspect(_id){
  console.log("Child is trying to inspect", _id)
  this.UsersService.find_a_user(_id)
    .then((result) => {
      this.selectedUser = result
      this.inspectedID = _id
      return this.selectedUser
    })
    .catch((err) => {console.log(err)})
}
update(){
  this.UsersService.update_User(this.selectedUser)
.then((data) => {
  console.log("front end is trying to edit")
  this.refresh.emit()

})
.catch((err) => {console.log(err)})
}

}
