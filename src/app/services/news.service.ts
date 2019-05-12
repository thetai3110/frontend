import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http:HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/news');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/news/' + id);
  }

   getDataByCourse(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/news/course/' + id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/news/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/news/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/news/update/'+id, data);
  }
  
  paging(page): Observable<[]> {
    return this.http.get<[]>('http://localhost:8080/news/paging/' + page);
  }

  total(){
    return this.http.get('http://localhost:8080/news/total');
  }

  view(id, data){
    return this.http.post('http://localhost:8080/news/views/'+id, data);
  }

}
