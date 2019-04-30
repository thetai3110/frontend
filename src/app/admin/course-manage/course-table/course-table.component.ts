import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from 'src/app/services/course.service';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { CourseFormComponent } from '../course-form/course-form.component';
import { CourseDeleteComponent } from '../course-delete/course-delete.component';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['../../../../assets/css/table.css']
})
export class CourseTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns = ['id', 'name', 'level', 'edu', 'duration', 'dayStart', 'fee', 'space', 'condition', 'describe', 'tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result: any;
  status = 1;

  constructor(private courseService: CourseService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable(this.status);
  }

  reloadTable(status) {
    this.courseService.getDataByStatus(status).subscribe(rs => {
      if (rs != null) {
        this.dataSource = new MatTableDataSource(rs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.dataSource = null;
      }

    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id): void {
    this.courseService.getDataById(id).subscribe(data => {
      this.result = data;
      const dialogRef = this.dialog.open(CourseDialogComponent, {
        width: '500px',
        data: {
          stu: this.result
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.reloadTable(this.status);
      });
    });
  }

  onDelete(id): void {
    const dialogRef = this.dialog.open(CourseDeleteComponent, {
      width: '250px',
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable(this.status);
    });
  }

  onOpenDialogAdd() {
    const dialogRef = this.dialog.open(CourseFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable(this.status);
    });
  }

  onChangeStatus(e) {
    this.status = e.target.value;
    this.reloadTable(this.status);
  }

}
