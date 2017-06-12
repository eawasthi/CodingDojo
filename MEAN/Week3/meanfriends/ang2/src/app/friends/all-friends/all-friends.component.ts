import { Component, OnInit } from '@angular/core';
import { FriendsService } from "app/friends/friends.service";

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.css']
})
export class AllFriendsComponent implements OnInit {
  search_string: string = ""

  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
  }

}
