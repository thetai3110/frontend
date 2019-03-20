import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:8080/course');
  }

  postData(data){
    return this.http.post('http://localhost:8080/course/add',data);
  }
}
