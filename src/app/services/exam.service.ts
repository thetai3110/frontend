import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam/' + id);
  }

  getDataByStatus(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam/status/' + id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/exam/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/exam/update/'+id, data);
  }
  
  openExam(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam/open/' + id);
  }

  closeExam(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam/close/' + id);
  }

  finish(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam/finish/' + id);
  }

}
