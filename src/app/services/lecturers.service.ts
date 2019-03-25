import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecturers } from '../model/lecturers.model';

@Injectable({
  providedIn: 'root'
})
export class LecturersService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Lecturers[]>{
    return this.http.get<Lecturers[]>('http://localhost:8080/lecturers');
  }

  postData(data){
    return this.http.post('http://localhost:8080/lecturers/add',data);
  }
}
