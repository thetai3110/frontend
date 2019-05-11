import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient) { }

  getData(): Observable<[]> {
    return this.http.get<[]>('http://localhost:8080/feedback');
  }

  getDataById(id): Observable<[]> {
    return this.http.get<[]>('http://localhost:8080/feedback/' + id);
  }

  paging(page): Observable<[]> {
    return this.http.get<[]>('http://localhost:8080/feedback/paging/' + page);
  }

  total(){
    return this.http.get('http://localhost:8080/feedback/total');
  }

  getDataByCode(id): Observable<[]> {
    return this.http.get<[]>('http://localhost:8080/feedback/course/' + id);
  }

  deleteData(id): Observable<[]> {
    return this.http.get<[]>('http://localhost:8080/feedback/delete/' + id);
  }

  postData(data) {
    return this.http.post('http://localhost:8080/feedback/add', data);
  }

}
