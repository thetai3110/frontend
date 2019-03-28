import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { EmployeeDeleteComponent } from '../employee-delete/employee-delete.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns= ['id','name','cmnd','roles','date','sex','address','email','phone','salary','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;

  constructor(private employeeService: EmployeeService,
            public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable();
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  openDialog(id): void {
    this.employeeService.getDataById(id).subscribe(data =>{
      this.result = data;
      const dialogRef = this.dialog.open(EmployeeDialogComponent, {
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
    const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
      width: '250px',
      data:{
          id : id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadTable();
    });
  }
  
  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadTable();
    });
  }

  reloadTable(){
    this.employeeService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
