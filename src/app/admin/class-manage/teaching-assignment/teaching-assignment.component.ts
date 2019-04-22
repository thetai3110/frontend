import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LecturersService } from 'src/app/services/lecturers.service';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-teaching-assignment',
  templateUrl: './teaching-assignment.component.html',
  styleUrls: ['../../../../assets/css/table.css']
})
export class TeachingAssignmentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faCheckCircle = faCheckCircle;
  displayedColumns= ['id','name','majors','date','sex','address','email','phone','salary','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;
  listSend = [];

  constructor(private lecturersService: LecturersService,
          private classesService: ClassesService,
          public dialog: MatDialog,
          public dialogRef: MatDialogRef<TeachingAssignmentComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any,
          private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.reloadTable();
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  onSend(){
    console.log(this.listSend);
    console.log(this.data);
    this.classesService.teachingAssignment(this.data, this.listSend).subscribe(rs =>{
      if(Boolean(rs) == true){
        this.snackBar.open("Success!!!", "Send", {
          duration: 2000,
        });
      }else{
        this.snackBar.open("Fail!!!", "Send", {
          duration: 2000,
        });
      }
      this.dialogRef.close();
    })
  }


  onChange(e, idLecturers){
    if(e.checked == true){
      this.listSend.push(idLecturers);
    }else{
      var pos = this.listSend.indexOf(idLecturers);
      this.listSend.splice(pos, 1);
    }
  }

  reloadTable(){
    this.lecturersService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


}
