import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { StudentService } from 'src/app/services/student.service';
import { faPlusCircle, faTrashAlt, faPen, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { StudentFormComponent } from '../../student-manage/student-form/student-form.component';
import { StudentDialogComponent } from '../../student-manage/student-dialog/student-dialog.component';
import { ClassDeleteComponent } from '../class-delete/class-delete.component';
import { StudentTableComponent } from '../../student-manage/student-table/student-table.component';

@Component({
  selector: 'app-class-student',
  templateUrl: './class-student.component.html',
  styleUrls: ['../../../../assets/css/table.css']
})
export class ClassStudentComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle; faFileExcel = faFileExcel;
  displayedColumns= ['id','name','cmnd','sex','email','phone','isFee','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;
  allClass: any;
  public idClass = 1;
  status = 3;
  studentClass = {
    idClass : 1,
    idStudent : "",
    isFee: 0
  }

  constructor(private classesService: ClassesService,
            private studentService: StudentService,
            public dialog: MatDialog,
            private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.classesService.getData().subscribe(data =>{
      this.allClass = data;
    });
    this.reloadTable(Number(this.idClass));
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelected(e){
    this.idClass = e.target.value;
    this.classesService.getDataById(this.idClass).subscribe(data =>{
      if(data != null){
        this.status = data['status'];
      }
    });
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
        this.reloadTable(Number(this.idClass));
      });
    });
  }

  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '500px',
      data:{
        title: "Thêm học viên vào lớp có Id: " + this.idClass
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.studentClass.idStudent = result;
      this.studentClass.idClass = this.idClass;
      this.studentService.postIntoClass(this.studentClass).subscribe(data =>{
        if(data!=null){
          this.reloadTable(Number(this.idClass));
        }
      })
    });
  } 

  onDelete(id, idStu): void {
    const dialogRef = this.dialog.open(ClassDeleteComponent, {
      width: '250px',
      data:{
          id : id,
          idStu : idStu,
          title : 0
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable(Number(this.idClass));
    });
  }

  onOpenDialogChoose(){
    const dialogRef = this.dialog.open(StudentTableComponent, {
      width: '800px',
      data : {
        method : 'choose',
        class : this.idClass
      }
    });
    dialogRef.afterClosed().subscribe(result => {
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
  
  onExport(){
    var fileName = prompt("Nhập tên file Excel", '');
    if(fileName != null){
      this.classesService.export(this.idClass, fileName).subscribe(data =>{
        if(Boolean(data)==true){
          this.snackBar.open("Success!!!", "Export", {
            duration: 2000,
          });
        }else{
          this.snackBar.open("Fail!!!", "Export", {
            duration: 2000,
          });
        }
      })
    }
  }
}
