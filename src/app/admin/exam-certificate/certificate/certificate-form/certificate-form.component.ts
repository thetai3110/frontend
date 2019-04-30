import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { MarksService } from 'src/app/services/marks.service';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['../../../../../assets/css/table.css']
})
export class CertificateFormComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns= ['id','course','class','student','cmnd','marks','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  allClass: any;

  constructor(private marksService: MarksService,
            private classesService: ClassesService,
            public dialog: MatDialog) { }

  ngOnInit() {
    this.classesService.getData().subscribe(classes =>{
      this.allClass = classes;
    });
    this.reloadTable(1);
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(id){
    this.marksService.getDataByClass(id).subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  chooseClass(e){
    this.reloadTable(e.target.value);
  }

}
