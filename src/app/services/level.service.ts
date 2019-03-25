import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from '../model/level.model';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Level[]>{
    return this.http.get<Level[]>('http://localhost:8080/level');
  }

  postData(data){
    return this.http.post('http://localhost:8080/level/add',data);
  }
}
