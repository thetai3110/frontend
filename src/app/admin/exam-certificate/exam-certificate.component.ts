import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-certificate',
  templateUrl: './exam-certificate.component.html',
  styleUrls: ['./exam-certificate.component.css']
})
export class ExamCertificateComponent implements OnInit {

  constructor(private router: Router) { }
  roles = "";

  ngOnInit() { 
    if (localStorage.getItem("roles") != null) {
      this.roles = localStorage.getItem("roles");
      if (this.roles != "Admin" && this.roles != "Educate") {
        this.router.navigate([""]);
      }
    }

  }

}
