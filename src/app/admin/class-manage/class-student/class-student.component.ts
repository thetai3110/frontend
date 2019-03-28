import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { StudentService } from 'src/app/services/student.service';
import { faPlusCircle, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { StudentFormComponent } from '../../student-manage/student-form/student-form.component';
import { StudentDialogComponent } from '../../student-manage/student-dialog/student-dialog.component';

@Component({
  selector: 'app-class-student',
  templateUrl: './class-student.component.html',
  styleUrls: ['./class-student.component.css']
})
export class ClassStudentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns= ['id','name','cmnd','sex','email','phone','isFee','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;
  allClass: any;
  public idClass = 1;

  constructor(private classesService: ClassesService,
            private studentService: StudentService,
            public dialog: MatDialog) { }

  ngOnInit() {
    this.classesService.getData().subscribe(data =>{
      this.allClass = data;
    });
    this.reloadTable(Number(this.idClass));
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelected(){
    console.log("change");
    this.reloadTable(Number(this.idClass));
  }

  openDialog(id): void {
    this.studentService.getDataById(id).subscribe(data =>{
      this.result = data;
      const dialogRef = this.dialog.open(StudentDialogComponent, {
        width: '500px',
        data:{
          stu : this.result
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.reloadTable(Number(this.idClass));
      });
    });
  }

  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadTable(Number(this.idClass));
    });
  } 
  
  reloadTable(idClass){
    this.studentService.getDataByClass(idClass).subscribe(rs =>{
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
