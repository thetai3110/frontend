import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
 
  constructor(private http: HttpClient) { }

  getData(): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/invoice');
  }

  getDataById(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/invoice/' + id);
  }

  getDataByRegister(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/invoice/register/' + id);
  }

  deleteData(id): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/invoice/delete/' + id);
  }

  postData(data){
    return this.http.post('http://localhost:8080/invoice/add',data);
  }

  updateData(id, data){
    return this.http.post('http://localhost:8080/invoice/update/'+id, data);
  }

  export(id, fileName): Observable<[]>{
    return this.http.get<[]>('http://localhost:8080/invoice/export/' + id+"/"+fileName);
  }
}

