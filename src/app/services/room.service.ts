import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Room[]>{
    return this.http.get<Room[]>('http://localhost:8080/room');
  }

  getDataById(id): Observable<Room[]>{
    return this.http.get<Room[]>('http://localhost:8080/room/' + id);
  }

  deleteData(id): Observable<Room[]>{
    return this.http.get<Room[]>('http://localhost:8080/room/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/room/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/room/update/'+id, data);
  }

} 
