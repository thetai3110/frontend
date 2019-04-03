import { Component, OnInit, ViewChild } from '@angular/core';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { AccountService } from 'src/app/services/account.service';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-account-permission',
  templateUrl: './account-permission.component.html',
  styleUrls: ['./account-permission.component.css']
})
export class AccountPermissionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns= ['username'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;
  check = "0";

  constructor(private accountService: AccountService,
            private permissionService: PermissionService,
            public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable();
  }

  add(){
    this.permissionService.getData().subscribe(data =>{
      this.result = data;
      for(var i=0;i< this.result.length;i++){
        this.displayedColumns.push(this.result[i].actionCode);
      }
    });
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(){
    this.accountService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.add();
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  
}
