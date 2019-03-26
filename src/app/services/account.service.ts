import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Account[]>{
    return this.http.get<Account[]>('http://localhost:8080/account');
  }

  postData(data){
    return this.http.post('http://localhost:8080/account/add',data);
  }
}
