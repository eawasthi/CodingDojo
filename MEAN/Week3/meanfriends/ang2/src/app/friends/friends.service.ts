import { Injectable } from '@angular/core';
import { User } from "app/friends/friends-new/user";
import { Http,Response } from "@angular/http";
import "rxjs";

@Injectable()
export class FriendsService {
  newpage = false;
  mainpage = true;
  editpage = false;
  showpage = false;
  showUser:any;
  user:User;
  USERS: any = []
  userId: any;


  constructor(private http:Http) { }

  get_users(){
    this.http.get('/users')
      .map((response: Response) => response.json())
      .subscribe(data => {this.USERS=data})
  }

  newPage(){
    this.newpage = true
    this.mainpage = false;
  }

  editPage(id){
    this.editpage = true;
    this.mainpage = false;
    console.log("id",id)
    this.userId = id
  }

  showPage(id){
    this.showpage = true
    this.mainpage = false
    console.log("show_user id", id)
    this.http.get("/show/"+id)
        .map((response: Response) => response.json())
        .subscribe(data => {this.showUser = data})
    }
    
  editUser(user:User){
    console.log("edited user", user)
    console.log("userId", this.userId)
      this.http.post("/edit/"+this.userId,user)
          .map((response: Response) => response.json())
          .subscribe(data => {this.USERS = data})
      this.editpage = false;
      this.mainpage = true;
    }

  addUser(user:User){
    console.log("user", user)
      this.http.post("/create", user)
          .map((response: Response) => response.json())
          .subscribe(data => {this.USERS = data})
      this.newpage = false;
      this.mainpage = true;
    }

    deleteUser(id){
      console.log("delete_user id", id)
      this.http.get("/delete/"+id)
          .map((response: Response) => response.json())
          .subscribe(data => {this.USERS = data})
    }

    home(){
      this.mainpage = true;
      this.showpage = false;
    }
  

}