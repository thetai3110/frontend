import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Course[]>{
    return this.http.get<Course[]>('http://localhost:8080/course');
  }

  postData(data){
    return this.http.post('http://localhost:8080/course/add',data);
  }

  getDataById(id){
    return this.http.get('http://localhost:8080/course/'+id);
  }

}
