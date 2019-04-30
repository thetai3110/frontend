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

  // Lấy theo trạng thái
  getDataByStatus(status): Observable<Classes[]>{
    return this.http.get<Classes[]>('http://localhost:8080/class/status/'+status);
  }

  // Lấy lớp theo id
  getDataById(id): Observable<Classes[]>{
    return this.http.get<Classes[]>('http://localhost:8080/class/follow-id/'+id);
  }

  // Lấy lịch theo từng lớp
  getClassDayByClass(idClass){
    return this.http.get('http://localhost:8080/class-day/'+idClass);
  }

  // Lấy lịch theo từng phòng
  getClassDayByRoom(idRoom){
    return this.http.get('http://localhost:8080/class-day/room/'+idRoom);
  }

  // Thêm lịch học
  addClassDay(data){
    return this.http.post('http://localhost:8080/class-day/add',data);
  }

  // Sửa lịch học
  updateClassDay(data,id){
    return this.http.post('http://localhost:8080/class-day/update/'+id,data);
  }

  // Xóa lịch học
  deleteClassDay(id){
    return this.http.get<Classes[]>('http://localhost:8080/class-day/delete/' + id);
  }

  // Lấy lớp theo khóa học
  getDataByIdCourse(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/class/follow-course/'+id);
  } 

  getDataByIdCourseAndStatus(id, status): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/class/follow-course/'+id+"/"+status);
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

  updateData1(id, data){
    return this.http.post('http://localhost:8080/class/update1/'+id, data);
  }

  //Phân công giảng dạy
  teachingAssignment(id, data){
    return this.http.post('http://localhost:8080/class/teaching-assignment/'+id, data);
  }

  //Mở lớp
  openClass(id){
    return this.http.get('http://localhost:8080/class/open/'+id);
  }

  //Mở lớp
  closeClass(id){
    return this.http.get('http://localhost:8080/class/close/'+id);
  }

  //Kết thúc
  finish(id){
    return this.http.get('http://localhost:8080/class/finish/'+id);
  }

}
