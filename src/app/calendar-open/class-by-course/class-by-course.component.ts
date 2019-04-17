import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ClassesService } from 'src/app/services/classes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-by-course',
  templateUrl: './class-by-course.component.html',
  styleUrls: ['./class-by-course.component.css']
})
export class ClassByCourseComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @Input() idCourse: Number;

  displayedColumns: string[] = ['className', 'date', 'dayStart', 'space', 'tool'];
  dataSource;

  constructor(private classService: ClassesService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      if (this.idCourse != null)
        this.reloadTable(this.idCourse);
      else {
        this.router.params.subscribe(data => {
          this.reloadTable(data.idC);
        });
      }
    }, 500);
  }

  reloadTable(id) {
    this.classService.getDataByIdCourse(id).subscribe(rs => {
      if (rs != null) {
        this.dataSource = new MatTableDataSource(rs);
        this.dataSource.sort = this.sort;
      } else {
        this.dataSource = null;
      }
    });
  }

}
