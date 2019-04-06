import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentClassService {

  constructor(private http: HttpClient) { }
  
  getClassByStudent(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/student-class/student/'+id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/student-class/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/student-class/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/student-class/update/'+id, data);
  }
}
