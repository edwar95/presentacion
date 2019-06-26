import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../AuthService/auth.service";



@Injectable({
  providedIn: 'root'
})
export class GitUsersService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<object>{
    return this.http.get(`https://api.github.com/users/1`);
  }


}
