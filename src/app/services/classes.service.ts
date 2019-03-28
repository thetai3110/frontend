import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classes } from '../model/classes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Classes[]>{
    return this.http.get<Classes[]>('http://localhost:8080/class');
  }

  getDataById(id): Observable<Classes[]>{
    return this.http.get<Classes[]>('http://localhost:8080/class/follow-id/'+id);
  }

  getDataByIdCourse(id){
    return this.http.get('http://localhost:8080/class/follow-course/'+id);
  } 

  deleteData(id): Observable<Classes[]>{
    return this.http.get<Classes[]>('http://localhost:8080/class/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/class/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/class/update/'+id, data);
  }

}
