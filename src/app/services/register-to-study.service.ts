import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterToStudyService {

  constructor(private http: HttpClient) { }

  postData(data){
    return this.http.post('http://localhost:8080/register-to-study',data);
  }

  pay(data){
    return this.http.post('http://localhost:8080/payment',data);
  }
}
