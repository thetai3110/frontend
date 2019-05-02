import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassesService } from 'src/app/services/classes.service';
import { faPen, faTrashAlt, faPlusCircle, faPaperPlane, faCalendarCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';
import { ClassDeleteComponent } from '../class-delete/class-delete.component';
import { ClassFormComponent } from '../class-form/class-form.component';
import { TeachingAssignmentComponent } from '../teaching-assignment/teaching-assignment.component';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['../../../../assets/css/table.css']
})
export class ClassTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPaperPlane = faPaperPlane; faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  faCalendarCheck = faCalendarCheck; faTimesCircle = faTimesCircle;
  displayedColumns = ['id', 'name', 'course', 'lecturers', 'room', 'dayStart', 'size', 'minSize', 'maxSize', 'status', 'date', 'tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result: any;
  status = 0;
  day: any;

  constructor(private classesService: ClassesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    var d = new Date();
    d.setDate(d.getDate() + 3);
    this.day = new Date(d).getTime();
    this.reloadTable(this.status);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id): void {
    this.classesService.getDataById(id).subscribe(data => {
      this.result = data;
      const dialogRef = this.dialog.open(ClassDialogComponent, {
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
    const dialogRef = this.dialog.open(ClassDeleteComponent, {
      width: '250px',
      data: {
        id: id,
        title: 1
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable(this.status);
    });
  }

  onCancel(id) {
    var rs = confirm("Hủy lớp có id là :"  + id + "?");
    if (rs == true) {
      this.classesService.cancelClass(id).subscribe(data => {
        if (Boolean(data) == true) {
          this.snackBar.open("Success!!!", "Cancel", {
            duration: 2000,
          });
        } else {
          this.snackBar.open("Fail!!!", "Cancel", {
            duration: 2000,
          });
        }
        this.reloadTable(this.status);
      });
    }
  }

  onOpenDialogAdd() {
    const dialogRef = this.dialog.open(ClassFormComponent, {
      width: '500px',
      data: {
        title: "Thêm lớp học mới"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable(this.status);
    });
  }

  onOpenLecturers(idClass) {
    const dialogRef = this.dialog.open(TeachingAssignmentComponent, {
      width: '900px',
      data: idClass
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  reloadTable(status) {
    this.classesService.getDataByStatus(status).subscribe(rs => {
      if (rs != null) {
        this.dataSource = new MatTableDataSource(rs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }else{
        this.dataSource = null;
      }
    });
  }

  onChangeStatus(e) {
    this.status = e.target.value;
    this.reloadTable(this.status);
  }

  openClass(e, id, name) {
    if (e.checked == true) {
      var rs = confirm("Mở lớp " + name + "?");
      if (rs == true) {
        this.classesService.openClass(id).subscribe(data => {
          if (Boolean(data) == true) {
            this.snackBar.open("Success!!!", "OpenClass", {
              duration: 2000,
            });
          } else {
            this.snackBar.open("Fail!!!", "OpenClass", {
              duration: 2000,
            });
          }
          this.reloadTable(this.status);
        });
      }
      this.reloadTable(this.status);
    } else {
      var rs = confirm("Đóng lớp " + name + "?");
      if (rs == true) {
        this.classesService.closeClass(id).subscribe(data => {
          if (Boolean(data) == true) {
            this.snackBar.open("Success!!!", "CloseClass", {
              duration: 2000,
            });
          } else {
            this.snackBar.open("Fail!!!", "CloseClass", {
              duration: 2000,
            });
          }
          this.reloadTable(this.status);
        });
      }
      this.reloadTable(this.status);
    }
  }

  onFinish(id, name) {
    var rs = confirm("Kết thuc lớp " + name + "?");
    if (rs == true) {
      this.classesService.finish(id).subscribe(data => {
        if (Boolean(data) == true) {
          this.snackBar.open("Success!!!", "Finish", {
            duration: 2000,
          });
        } else {
          this.snackBar.open("Fail!!!", "Finish", {
            duration: 2000,
          });
        }
        this.reloadTable(this.status);
      });
    }
  }

}
