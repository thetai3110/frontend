import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { faPlusCircle, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { LessonDialogComponent } from '../lesson-dialog/lesson-dialog.component';
import { LessonFormComponent } from '../lesson-form/lesson-form.component';
import { LessonDeleteComponent } from '../lesson-delete/lesson-delete.component';
import { LessonService } from 'src/app/services/lesson.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-lesson-table',
  templateUrl: './lesson-table.component.html',
  styleUrls: ['./lesson-table.component.css']
})
export class LessonTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns= ['id','day','formality','title','content','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;
  allCourse: any;
  idCourse= 1;

  constructor(public dialog: MatDialog,
            private lessonService: LessonService,
            private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getData().subscribe(data =>{
      this.allCourse = data;
    });
    this.reloadTable(Number(this.idCourse));
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelected(){
    console.log("change");
    this.reloadTable(Number(this.idCourse));
  }

  openDialog(id): void {
    this.lessonService.getDataById(id).subscribe(data =>{
      this.result = data;
      const dialogRef = this.dialog.open(LessonDialogComponent, {
        width: '500px',
        data:{
          stu : this.result
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.reloadTable(Number(this.idCourse));
      });
    });
  }

  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(LessonFormComponent, {
      width: '500px',
      data:{
        title: "Thêm bài giảng vào khóa học có Id: " + this.idCourse,
        idCourse: this.idCourse
      }
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  } 

  onDelete(id): void {
    const dialogRef = this.dialog.open(LessonDeleteComponent, {
      width: '250px',
      data:{
          id : id,
          title : 0
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadTable(Number(this.idCourse));
    });
  }
  
  reloadTable(idCourse){
    this.lessonService.getDataByCourse(idCourse).subscribe(rs =>{
      if(rs!=null){
        this.dataSource = new MatTableDataSource(rs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }else{
        this.dataSource = null;
      }
    });
  }

}
