import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationprogramService {

  constructor(private http: HttpClient) { }
  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/education-program');
  }

  getDataById(id){
    return this.http.get('http://localhost:8080/education-program/'+id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/education-program/add',data);
  }
}
