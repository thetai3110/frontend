import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:8080/course');
  }

  getDataByStatus(status): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:8080/course/status/' + status);
  }

  postData(data) {
    return this.http.post('http://localhost:8080/course/add', data);
  }

  getDataById(id) {
    return this.http.get('http://localhost:8080/course/' + id);
  }

  getDataByEducation(id) {
    return this.http.get('http://localhost:8080/course/education/' + id);
  }

  getDataByEducationAndStatus(id, status) {
    return this.http.get('http://localhost:8080/course/education/' + id + "/" + status);
  }

  getDataByLevelAndEducation(idEdu, idLevel) {
    return this.http.get('http://localhost:8080/course/education/level/' + idEdu + "/" + idLevel);
  }

  getDataByLevelAndEducationAndStatus(idEdu, idLevel, status) {
    return this.http.get('http://localhost:8080/course/education/level/' + idEdu + "/" + idLevel+"/"+status);
  }

  updateData(data, id) {
    return this.http.post('http://localhost:8080/course/update/' + id, data);
  }

  deleteData(id): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:8080/course/delete/' + id);
  }
}
