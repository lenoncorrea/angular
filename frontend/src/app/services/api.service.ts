import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  readonly apiUrl = environment.apiUrl;

  registerUser(user) : Observable<any>{
    return this.http.post(this.apiUrl + '/register', user);
  };

  loginUser(login) : Observable<any>{
    return this.http.post(this.apiUrl + '/login', login);
  };

  getUsers(page) : Observable<any>{
    return this.http.get(this.apiUrl + '/users?page=' + page);
  }

  detailUser(id) : Observable<any>{
    return this.http.get(this.apiUrl + '/users/' + id);
  }

  updateUser(id, user) : Observable<any>{
    return this.http.put(this.apiUrl + '/users/' + id, user, {observe: 'response'});
  }

  deleteUser(id) : Observable<any>{
    return this.http.delete(this.apiUrl + '/users/' + id, {observe: 'response'});
  }
}
