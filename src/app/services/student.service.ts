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

  postData(data){
    return this.http.post('http://localhost:8080/student/add',data);
  }
}
