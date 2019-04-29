import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { MarksService } from 'src/app/services/marks.service';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['../../../../assets/css/table.css']
})
export class MarksComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns= ['id','course','class','student','cmnd','marks','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;

  constructor(private marksService: MarksService,
            private classesService: ClassesService,
            public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable();
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(){
    this.marksService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onMarks(e){
    console.log(e);
    
  }

}
