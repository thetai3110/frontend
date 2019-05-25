import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassesService } from 'src/app/services/classes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-manage',
  templateUrl: './class-manage.component.html',
  styleUrls: ['./class-manage.component.css']
})
export class ClassManageComponent implements OnInit {

  classes : {};

  constructor(private router: Router) { }

  roles = "";

  ngOnInit() {
    if(localStorage.getItem("roles") != null){
      this.roles = localStorage.getItem("roles");
      if(this.roles != "Admin" && this.roles != "Class"){
        this.router.navigate([""]);
      }
    }
  }

}
