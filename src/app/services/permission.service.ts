import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Permission } from '../model/permission.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { } 

  getData(): Observable<Permission[]>{
    return this.http.get<Permission[]>('http://localhost:8080/permission');
  }

  getDataById(id): Observable<Permission[]>{
    return this.http.get<Permission[]>('http://localhost:8080/permission/' + id);
  }

  deleteData(id): Observable<Permission[]>{
    return this.http.get<Permission[]>('http://localhost:8080/permission/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/permission/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/permission/update/'+id, data);
  }
}
