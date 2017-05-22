import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http"

import { Friend } from "./friend"

import "rxjs"

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class FriendsService {

  constructor(private http: Http) { }
  showpage = false
  editpage = false
  newpage=false


  showPage(){
    this.showpage = true
  }

  // editPage(){
  //   this.editpage = true
  // }

  // newPage(){
  //   this.newpage = true
  // }


  // FRIENDS : any[] = []


  // get_all_friends(){
  // 	return this.http.get("/all_friends")
  // 			.map(data => data.json())
  // 			.subscribe(data => {this.FRIENDS = data})
  // }

  // create_friend(friend: Friend){
  // 	return this.http.post("/create", friend, OPTIONS)
  // 			.toPromise()
  // } 

}