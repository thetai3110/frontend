import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getDataById(id): Observable<Account[]>{
    return this.http.get<Account[]>('http://localhost:8080/account/'+ id);
  }

  getData(): Observable<Account[]>{
    return this.http.get<Account[]>('http://localhost:8080/account');
  }

  postData(data){
    return this.http.post('http://localhost:8080/account/add',data);
  }

  deleteData(id): Observable<Account[]>{
    return this.http.get<Account[]>('http://localhost:8080/account/delete/' + id);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/account/update/'+id, data);
  }
}
