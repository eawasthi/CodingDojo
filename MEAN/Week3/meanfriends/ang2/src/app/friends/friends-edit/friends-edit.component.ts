import { Component, OnInit } from '@angular/core';
import { FriendsService } from "app/friends/friends.service";
import { User } from "app/friends/friends-new/user";

@Component({
  selector: 'app-friends-edit',
  templateUrl: './friends-edit.component.html',
  styleUrls: ['./friends-edit.component.css']
})
export class FriendsEditComponent implements OnInit {
  editedUser : User = new User()
  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
  }

  editUser(){
    this._friendsService.editUser(this.editedUser)
  }
}
