import { Component, OnInit } from '@angular/core';
import { FriendsService } from "app/friends/friends.service";

@Component({
  selector: 'app-friends-show',
  templateUrl: './friends-show.component.html',
  styleUrls: ['./friends-show.component.css']
})
export class FriendsShowComponent implements OnInit {

  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
  }

}
