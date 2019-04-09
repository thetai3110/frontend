import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { PersonalDialogComponent } from '../personal-dialog/personal-dialog.component';
import { StudentClassService } from 'src/app/services/student-class.service';

@Component({
  selector: 'app-table-registered',
  templateUrl: './table-registered.component.html',
  styleUrls: ['./table-registered.component.css']
})
export class TableRegisteredComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() idStudent: Number;

  displayedColumns: string[] = ['id', 'className', 'course', 'fee', 'isFee','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;

  constructor(private studentClassService: StudentClassService,
              public dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      if(this.idStudent != null)
        this.reloadTable(this.idStudent);
    }, 1000);
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(id){
    this.studentClassService.getClassByStudent(id).subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  openPay(){
    const dialogRef = this.dialog.open(PersonalDialogComponent, {
      width: '700px',
      data : this.dataSource.data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable(this.idStudent);
    });
  }
  
}
