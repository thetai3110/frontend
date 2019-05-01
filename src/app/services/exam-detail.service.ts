import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamDetailService {

  constructor(private http: HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam-detail');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam-detail/' + id);
  }

  getDataByExam(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam-detail/exam/' + id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/exam-detail/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/exam-detail/add',data);
  }

  postMultiData(data){
    return this.http.post('http://localhost:8080/exam-detail/multi/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/exam-detail/update/'+id, data);
  }
  
}
