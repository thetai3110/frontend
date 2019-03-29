import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassesService } from 'src/app/services/classes.service';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';
import { ClassDeleteComponent } from '../class-delete/class-delete.component';
import { ClassFormComponent } from '../class-form/class-form.component';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.css']
})
export class ClassTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns= ['id','name','course','lecturers','room','size','minSize','maxSize','status','date','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;

  constructor(private classesService: ClassesService,
            public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable();
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  openDialog(id): void {
    this.classesService.getDataById(id).subscribe(data =>{
      this.result = data;
      const dialogRef = this.dialog.open(ClassDialogComponent, {
        width: '500px',
        data:{
          stu : this.result
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.reloadTable();
      });
    });
  }

  onDelete(id): void {
    const dialogRef = this.dialog.open(ClassDeleteComponent, {
      width: '250px',
      data:{
          id : id,
          title : 1
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadTable();
    });
  }
  
  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(ClassFormComponent, {
      width: '500px',
      data: {
        title: "Thêm lớp học mới"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadTable();
    });
  }

  reloadTable(){
    this.classesService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
