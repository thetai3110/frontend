import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.css']
})
export class AccountManageComponent implements OnInit {

  accounts: {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/account').subscribe(data =>{
      this.accounts = data;
    });
  }
}
