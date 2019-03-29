import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../model/lesson.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>('http://localhost:8080/lesson');
  }

  getDataById(id): Observable<Lesson[]>{
    return this.http.get<Lesson[]>('http://localhost:8080/lesson/'+id);
  }

  getDataByCourse(idCourse): Observable<Lesson[]>{
    return this.http.get<Lesson[]>('http://localhost:8080/lesson/course/'+idCourse);
  }

  deleteData(id): Observable<Lesson[]>{
    return this.http.get<Lesson[]>('http://localhost:8080/lesson/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/lesson/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/lesson/update/'+id, data);
  }
}
