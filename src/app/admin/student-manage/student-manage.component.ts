import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { StudentFormComponent } from './student-form/student-form.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-student-manage',
  templateUrl: './student-manage.component.html',
  styleUrls: ['./student-manage.component.css']
})
export class StudentManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } 

}
