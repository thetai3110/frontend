import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  results : {};

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:8080/course');
  }
}
