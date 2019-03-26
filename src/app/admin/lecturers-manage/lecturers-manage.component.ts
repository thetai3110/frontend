import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { LecturersFormComponent } from './lecturers-form/lecturers-form.component';

@Component({
  selector: 'app-lecturers-manage',
  templateUrl: './lecturers-manage.component.html',
  styleUrls: ['./lecturers-manage.component.css']
})
export class LecturersManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(LecturersFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
