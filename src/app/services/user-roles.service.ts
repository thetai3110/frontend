import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  constructor(private http:HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/user-roles');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/user-roles/' + id);
  }

  getDataByRoles(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/user-roles/roles/' + id);
  }

  getDataByEmployee(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/user-roles/employee/' + id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/user-roles/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/user-roles/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/user-roles/update/'+id, data);
  }
}
