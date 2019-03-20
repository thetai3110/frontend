import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:8080/level');
  }

  postData(data){
    return this.http.post('http://localhost:8080/level/add',data);
  }
}
