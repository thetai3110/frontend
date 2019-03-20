import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MajorsService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:8080/majors');
  }

  postData(data){
    return this.http.post('http://localhost:8080/majors/add',data);
  }
}
