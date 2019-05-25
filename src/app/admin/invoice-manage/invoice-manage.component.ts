import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-manage',
  templateUrl: './invoice-manage.component.html',
  styleUrls: ['./invoice-manage.component.css']
})
export class InvoiceManageComponent implements OnInit {

  invoices : {};

  constructor(private http: HttpClient, private router: Router) { }
  roles= "";

  ngOnInit() {
    if (localStorage.getItem("roles") != null) {
      this.roles = localStorage.getItem("roles");
      if (this.roles != "Admin" && this.roles != "Invoice") {
        this.router.navigate([""]);
      }
    }
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/invoice').subscribe(data =>{
      this.invoices = data;
    });
  }
}
