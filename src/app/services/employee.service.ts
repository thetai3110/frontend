import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
}) 
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/employee');
  }

  getDataById(id): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/employee/' + id);
  }

  getDataByUsernameAndPass(username, pass): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/employee/username/' + username+'/'+pass);
  }

  deleteData(id): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/employee/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/employee/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/employee/update/'+id, data);
  }
}
