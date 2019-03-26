import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
