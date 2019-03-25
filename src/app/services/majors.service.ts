import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Majors } from '../model/majors.model';

@Injectable({
  providedIn: 'root'
})
export class MajorsService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Majors[]>{
    return this.http.get<Majors[]>('http://localhost:8080/majors');
  }

  postData(data){
    return this.http.post('http://localhost:8080/majors/add',data);
  }
}
