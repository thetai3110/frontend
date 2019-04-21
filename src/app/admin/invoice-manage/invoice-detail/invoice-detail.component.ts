import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { StudentService } from 'src/app/services/student.service';
import { StudentTableComponent } from '../../student-manage/student-table/student-table.component';
import { InvoiceDetailService } from 'src/app/services/invoice-detail.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns= ['id','name','cmnd','job','date','sex','address','email','phone'];
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result = {};
  isShow = false;

  constructor(private studentService: StudentService,
            public dialog: MatDialog, public dialogRef: MatDialogRef<InvoiceDetailComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any,
            private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.reloadTable(this.data.id);
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(id){
    this.studentService.getDataByInvoice(id).subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onChooseStudent(){
    const dialogRef = this.dialog.open(StudentTableComponent, {
      width: '700px',
      data : {
        method : 'invoice',
        idInvoice: this.data.id,
        idClass: this.data.idClass
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable(this.data.id);
    });
  }
}
