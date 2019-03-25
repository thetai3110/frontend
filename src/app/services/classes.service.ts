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

  getDataByIdCourse(id){
    return this.http.get('http://localhost:8080/class/follow-course/'+id);
  }
}
