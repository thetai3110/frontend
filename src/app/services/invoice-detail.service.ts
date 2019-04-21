import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {

  constructor(private http: HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/invoice-detail');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/invoice-detail/' + id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/invoice-detail/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/invoice-detail/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/invoice-detail/update/'+id, data);
  }
}
