import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classes } from '../model/classes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http:HttpClient) { }

  // Lấy toàn bộ
  getData(): Observable<Classes[]>{
    return this.http.get<Classes[]>('http://localhost:8080/class');
  }

  // Lấy lớp theo id
  getDataById(id): Observable<Classes[]>{
    return this.http.get<Classes[]>('http://localhost:8080/class/follow-id/'+id);
  }

  // Lấy lịch theo từng lớp
  getClassDayByClass(idClass){
    return this.http.get('http://localhost:8080/class-day/'+idClass);
  }

  // Thêm lịch học
  addClassDay(data){
    return this.http.post('http://localhost:8080/class-day/add',data);
  }

  // Sửa lịch học
  updateClassDay(data,id){
    return this.http.post('http://localhost:8080/class-day/update/'+id,data);
  }

  // Xóa
  deleteClassDay(id){
    return this.http.get<Classes[]>('http://localhost:8080/class-day/delete/' + id);
  }

  // Lấy lớp theo khóa học
  getDataByIdCourse(id){
    return this.http.get('http://localhost:8080/class/follow-course/'+id);
  } 

  // Xóa
  deleteData(id): Observable<Classes[]>{
    return this.http.get<Classes[]>('http://localhost:8080/class/delete/' + id);
  }

  // Thêm
  postData(data){
    return this.http.post('http://localhost:8080/class/add',data);
  }

  // Sửa
  updateData(id, data){
    return this.http.post('http://localhost:8080/class/update/'+id, data);
  }

}
