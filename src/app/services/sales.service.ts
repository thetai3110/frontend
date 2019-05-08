import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/sales');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/sales/' + id);
  }

   getDataByCode(code): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/sales/code/' + code);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/sales/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/sales/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/sales/update/'+id, data);
  }
}
