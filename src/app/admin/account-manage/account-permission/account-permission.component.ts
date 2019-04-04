import { Component, OnInit, ViewChild } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
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

  faSave = faSave;
  displayedColumns = ['username'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result: any;
  accPerTmp: any;
  accPer = [];
  news = [];
  remove = [];
  removeTmp = [];

  constructor(private accountService: AccountService,
    private permissionService: PermissionService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable();
  }

  add() {
    this.permissionService.getData().subscribe(data => {
      this.result = data;
      this.displayedColumns = ['username'];
      for (var i = 0; i < this.result.length; i++) {
        this.displayedColumns.push(this.result[i].actionCode);
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable() {
    this.remove = [];
    this.removeTmp = [];
    this.permissionService.getAllUserPermission().subscribe(data => {
      this.accPerTmp = data;
      this.accPer= [];
      for (var i = 0; i < this.accPerTmp.length; i++) {
        this.accPer.push(this.accPerTmp[i].idAccount + "-" + this.accPerTmp[i].idPer);
      }
      this.news = this.accPer;
    });
    this.accountService.getData().subscribe(rs => {
      if (!rs)
        return;
      this.add();
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onChangePer(account, per, event) {
    if (event.checked == true) {
      this.news.push(account + "-" + per);
    } else {
      this.removeTmp.push(account + "-" + per);
      var pos = this.news.indexOf(account + "-" + per);
      this.news.splice(pos, 1);
    }
  }

  onSave() {
    for (var i = 0; i < this.accPerTmp.length; i++) {
      if (this.news.indexOf(this.accPerTmp[i].idAccount + "-" + this.accPerTmp[i].idPer) != -1) {
        var pos = this.news.indexOf(this.accPerTmp[i].idAccount + "-" + this.accPerTmp[i].idPer);
        this.news.splice(pos, 1);
      }
      if (this.removeTmp.indexOf(this.accPerTmp[i].idAccount + "-" + this.accPerTmp[i].idPer) != -1) {
        this.remove.push(this.accPerTmp[i].idAccountPer);
      }
    }
    for (var i = 0; i < this.remove.length; i++) {
      this.permissionService.deleteAccPer(this.remove[i]).subscribe(data => {
        if (Boolean(data) == true)
          console.log("success");
      });
    }
    for (var i = 0; i < this.news.length; i++) {
      var accountPer = {
        idAccount: this.news[i].charAt(0),
        idPer: this.news[i].charAt(2),
      }
      this.permissionService.postAccPer(accountPer).subscribe(data => {
        if (data != null) {
          console.log("success");
        }
      });
    }
    setTimeout(() => {
      this.reloadTable();
    }, 1000);
  }
}
