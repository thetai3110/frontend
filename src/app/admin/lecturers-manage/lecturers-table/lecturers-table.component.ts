import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LecturersService } from 'src/app/services/lecturers.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { LecturersDialogComponent } from '../lecturers-dialog/lecturers-dialog.component';
import { LecturersDeleteComponent } from '../lecturers-delete/lecturers-delete.component';

@Component({
  selector: 'app-lecturers-table',
  templateUrl: './lecturers-table.component.html',
  styleUrls: ['./lecturers-table.component.css']
})
export class LecturersTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faEdit = faEdit; faTrashAlt = faTrashAlt;
  displayedColumns= ['id','name','majors','date','sex','address','email','phone','salary','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;

  constructor(private lecturersService: LecturersService,
          public dialog: MatDialog) { }

  ngOnInit() {
    this.lecturersService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id): void {
    this.lecturersService.getDataById(id).subscribe(data =>{
      this.result = data;
      const dialogRef = this.dialog.open(LecturersDialogComponent, {
        width: '500px',
        data:{
          stu : this.result
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }

  onDelete(id): void {
    const dialogRef = this.dialog.open(LecturersDeleteComponent, {
      width: '250px',
      data:{
          id : id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
