import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postData(data){
    return this.http.post('http://localhost:8080/login', data);
  }

  register(data){
    return this.http.post('http://localhost:8080/login/register', data);
  }

  checkAccount(data){
    return this.http.get('http://localhost:8080/login/check-register/' + data);
  }
}
