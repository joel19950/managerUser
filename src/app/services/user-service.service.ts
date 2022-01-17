import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }


  //get All user
  getAllUser(): Observable<User[]> {
    let host = environment.host;
    return this.http.get<User[]>(host + "/users?_sort=id&_order=desc");

  }


  //delete one user
  deleteUser(user: User): Observable<void> {
    let host = environment.host;
    return this.http.delete<void>(host + "/users/" + user.id);
  }


  //add one user
  addUser(user: User): Observable<User> {
    let host = environment.host;
    return this.http.post<User>(host + "/users", user);
  }



  //search user
  searchUser(keyword: string): Observable<User[]> {
    let host = environment.host;
    return this.http.get<User[]>(host + "/users?name_like=" + keyword);
  }


  //get one user
  getOneUser(id: number): Observable<User> {
    let host = environment.host;
    return this.http.get<User>(host + "/users/" + id);
  }


  //update one user
  updateUser(user: User): Observable<User> {
    let host = environment.host;
    return this.http.put<User>(host + "/users" + user.id, user);
  }

  //get selected user
  getSelectedUser(key: any): Observable<User[]> {
    let host = environment.host;
    return this.http.get<User[]>(host + "/users?name_like=" + key);
  }






}
