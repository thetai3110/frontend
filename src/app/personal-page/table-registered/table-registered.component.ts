import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

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

  constructor(private classesService: ClassesService) { }

  ngOnInit() {
    setTimeout(() => {
      this.reloadTable(this.idStudent);
    }, 1000);
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(id){
    this.classesService.getClassByStudent(id).subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onPay(){

  }
  
}
