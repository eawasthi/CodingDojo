import { UsersService } from './users.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allusers = []
  constructor(private _UsersService: UsersService) { }

  ngOnInit() {
    this.updateUserList()
  }

  refresh(){
    this.updateUserList()
  }

  updateUserList(){
    this._UsersService.get_all_users()
    .then((data) => {
      this.allusers = data
    })
    .catch((err) => {console.log(err)})
  }

}
