import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/certificate');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/certificate/' + id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/certificate/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/certificate/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/certificate/update/'+id, data);
  } 

  createCertificate(data){
    return this.http.post('http://localhost:8080/certificate/create',data);
  }
}
