import { Injectable } from '@angular/core';
import { Http,RequestOptions, Headers } from "@angular/http";
import { User } from './User'
import 'rxjs'

const HEADERS = new Headers({ "content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers : HEADERS})


@Injectable()
export class UsersService {
  constructor(private http:Http) { }

get_all_users(){
  return this.http.get("/get_users")
    .map(data => data.json())
    .toPromise()
}

create_User(User: User){
  console.log("The user service tried to create")
  return this.http.post("create", User, OPTIONS).toPromise()
}

find_a_user(_id){
  console.log("Service is looking for id", )
  return this.http.get(`/findOne/${_id}`)
  .map(data => data.json()).toPromise()
}

update_User(User){
  return this.http.post('/edit', User, OPTIONS).toPromise()
}

delete_User(_id){
  return this.http.post(`/delete/${_id}`, OPTIONS).toPromise()
}


}
