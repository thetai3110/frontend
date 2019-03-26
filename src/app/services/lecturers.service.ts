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

  getDataById(id): Observable<Lecturers[]>{
    return this.http.get<Lecturers[]>('http://localhost:8080/lecturers/' + id);
  }

  deleteData(id): Observable<Lecturers[]>{
    return this.http.get<Lecturers[]>('http://localhost:8080/lecturers/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/lecturers/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/lecturers/update/'+id, data);
  }
}
