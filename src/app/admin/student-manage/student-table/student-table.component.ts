import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../../services/student.service';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { StudentDeleteComponent } from '../student-delete/student-delete.component';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns= ['id','name','cmnd','job','date','sex','address','email','phone','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result = {};

  constructor(private studentService: StudentService,
            public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable();
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id): void {
    this.studentService.getDataById(id).subscribe(data =>{
      this.result = data;
      const dialogRef = this.dialog.open(StudentDialogComponent, {
        width: '500px',
        data:{
          stu : this.result
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.reloadTable();
      });
    });
  }

  onDelete(id): void {
    const dialogRef = this.dialog.open(StudentDeleteComponent, {
      width: '250px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
          id : id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }

  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '500px',
      data: {
        title: "Thêm học viên mới"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable();
    });
  } 

  reloadTable(){
    this.studentService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
