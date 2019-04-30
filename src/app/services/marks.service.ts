import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http: HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/marks');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/marks/' + id);
  }

  getDataByStudent(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/marks/student/' + id);
  }

  getDataByClass(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/marks/class/' + id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/marks/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/marks/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/marks/update/'+id, data);
  }

  save(id, marks){
    return this.http.get('http://localhost:8080/marks/save/'+id+'/'+marks);
  }

  saveAll(data){
    return this.http.post('http://localhost:8080/marks/saveall', data);
  }

}
