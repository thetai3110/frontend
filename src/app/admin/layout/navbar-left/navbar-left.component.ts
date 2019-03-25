import { Component, OnInit } from '@angular/core';
import { faUser, faUsers, faMale, faChalkboardTeacher,
         faUserGraduate, faLaptopCode, faFileInvoice,
         faDoorOpen, faWarehouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {

  faUser = faUser; faUsers = faUsers; faMale = faMale;
  faChalkboardTeacher = faChalkboardTeacher; faUserGraduate = faUserGraduate;
  faLaptopCode = faLaptopCode; faFileInvoice = faFileInvoice;
  faDoorOpen = faDoorOpen; faWarehouse= faWarehouse;

  constructor() { }

  ngOnInit() {
  }

}
