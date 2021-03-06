import { Component, OnInit } from '@angular/core';
import { faUser, faUsers, faMale, faChalkboardTeacher,
  faUserGraduate, faLaptopCode, faFileInvoice,
  faDoorOpen, faWarehouse, faCertificate, faBars, faSearch,
  faBell, faEnvelope, faUserCircle, faTachometerAlt,
  faFolder } from '@fortawesome/free-solid-svg-icons';
import { CreateCodeComponent } from './create-code/create-code.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  faUser = faUser; faUsers = faUsers; faMale = faMale;
  faChalkboardTeacher = faChalkboardTeacher; faUserGraduate = faUserGraduate;
  faLaptopCode = faLaptopCode; faFileInvoice = faFileInvoice;
  faDoorOpen = faDoorOpen; faWarehouse= faWarehouse; faCertificate = faCertificate;
  faBars = faBars; faSearch = faSearch; faBell = faBell; faEnvelope = faEnvelope;
  faUserCircle = faUserCircle; faTachometerAlt = faTachometerAlt; faFolder = faFolder;

  isShow = true;
  roles = "";

  ngOnInit() {
    if(localStorage.getItem("roles") != null){
      this.roles = localStorage.getItem("roles");
    }
  }

  onShow(){
    this.isShow = !this.isShow;
  }

  createCode(){
    const dialogRef = this.dialog.open(CreateCodeComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
