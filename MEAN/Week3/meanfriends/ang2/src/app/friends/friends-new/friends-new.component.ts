import { Component, OnInit } from '@angular/core';
import { User } from "app/friends/friends-new/user";
import { FriendsService } from "app/friends/friends.service";

@Component({
  selector: 'app-friends-new',
  templateUrl: './friends-new.component.html',
  styleUrls: ['./friends-new.component.css']
})
export class FriendsNewComponent implements OnInit {
  newUser: User = new User()

  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
  }

  addUser(){
    this._friendsService.addUser(this.newUser)
  }
}
