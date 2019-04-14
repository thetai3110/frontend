import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-class-by-course',
  templateUrl: './class-by-course.component.html',
  styleUrls: ['./class-by-course.component.css']
})
export class ClassByCourseComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @Input() idCourse: Number;

  displayedColumns: string[] = ['className', 'date', 'dayStart', 'space','tool'];
  dataSource;

  constructor(private classService: ClassesService) { }

  ngOnInit() {
    setTimeout(() => {
      this.reloadTable(this.idCourse);
    }, 500);
  }

  reloadTable(id){
    this.classService.getDataByIdCourse(id).subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
    });
  }

}
