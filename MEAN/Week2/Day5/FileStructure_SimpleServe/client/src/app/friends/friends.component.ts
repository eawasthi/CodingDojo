import { Component, OnInit } from '@angular/core';
import {FriendsService} from './friends.service';



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private _friendsService:FriendsService) { }

  ngOnInit(){
  }

}
