import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/student');
  }

  getDataById(id): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/student/'+id);
  }

  getDataByInvoice(id): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/student/invoice/'+id);
  }

  getDataByNameAndCmnd(name, cmnd): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/student/'+name+"/"+cmnd);
  }

  getDataByAccount(id): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/student/account/'+id);
  }

  getDataByUsername(username): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/student/username/'+username);
  }

  getDataByClass(id): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/student-class/'+id);
  }

  postIntoClass(data){
    return this.http.post('http://localhost:8080/student-class/add',data);
  }

  leaveClass(id): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/student-class/delete/'+id);
  }

  deleteData(id): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/student/delete/'+id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/student/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/student/update/'+id, data);
  }
}
