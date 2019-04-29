import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { RegisterService } from 'src/app/services/register.service';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { EditRegisterComponent } from './edit-register/edit-register.component';
import { DeleteRegisterComponent } from './delete-register/delete-register.component';

@Component({
  selector: 'app-registration-infomation',
  templateUrl: './registration-infomation.component.html',
  styleUrls: ['../../../../assets/css/table.css']
})
export class RegistrationInfomationComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns= ['id','name','class','email','phone','job','groupnum','isfee','formula','payment','status','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;

  constructor(private registerService: RegisterService,
            public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable();
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id): void {
    const dialogRef = this.dialog.open(DeleteRegisterComponent, {
      width: '250px',
      data:{
          id : id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }

  reloadTable(){
    this.registerService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


}
