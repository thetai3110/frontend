import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoice-manage',
  templateUrl: './invoice-manage.component.html',
  styleUrls: ['./invoice-manage.component.css']
})
export class InvoiceManageComponent implements OnInit {

  invoices : {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/invoice').subscribe(data =>{
      this.invoices = data;
    });
  }
}
