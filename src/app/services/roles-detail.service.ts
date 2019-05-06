import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesDetailService {

  constructor(private http:HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/roles-detail');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/roles-detail/' + id);
  }

  getDataByRoles(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/roles-detail/roles/' + id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/roles-detail/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/roles-detail/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/roles-detail/update/'+id, data);
  }
}
