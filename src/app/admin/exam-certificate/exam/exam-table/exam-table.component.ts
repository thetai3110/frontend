import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faPen, faTrashAlt, faPlusCircle, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ExamDialogComponent } from '../exam-dialog/exam-dialog.component';
import { ExamDeleteComponent } from '../exam-delete/exam-delete.component';
import { ExamFormComponent } from '../exam-form/exam-form.component';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam-table',
  templateUrl: './exam-table.component.html',
  styleUrls: ['../../../../../assets/css/table.css']
})
export class ExamTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle; faCalendarCheck = faCalendarCheck;
  displayedColumns = ['id','date','course', 'duration', 'status', 'tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result: any;
  status = 1;

  constructor(private examService: ExamService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.reloadTable(this.status);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id): void {
    this.examService.getDataById(id).subscribe(data => {
      this.result = data;
      const dialogRef = this.dialog.open(ExamDialogComponent, {
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
    const dialogRef = this.dialog.open(ExamDeleteComponent, {
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
    const dialogRef = this.dialog.open(ExamFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable(this.status);
    });
  }

  reloadTable(status) {
    this.examService.getDataByStatus(status).subscribe(rs => {
      if (rs != null) {
        this.dataSource = new MatTableDataSource(rs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.dataSource = null;
      }
    });
  }

  onChangeStatus(e) {
    this.status = e.target.value;
    this.reloadTable(this.status);
  }

  openExam(e, id) {
    if (e.checked == true) {
      var rs = confirm("Mở kỳ thi có id là" + id + "?");
      if (rs == true) {
        this.examService.openExam(id).subscribe(data => {
          if (Boolean(data) == true) {
            this.snackBar.open("Success!!!", "OpenExam", {
              duration: 2000,
            });
          } else {
            this.snackBar.open("Fail!!!", "OpenExam", {
              duration: 2000,
            });
          }
          this.reloadTable(this.status);
        });
      }
      this.reloadTable(this.status);
    } else {
      var rs = confirm("Đóng kỳ thi có id " + id + "?");
      if (rs == true) {
        this.examService.closeExam(id).subscribe(data => {
          if (Boolean(data) == true) {
            this.snackBar.open("Success!!!", "OpenExam", {
              duration: 2000,
            });
          } else {
            this.snackBar.open("Fail!!!", "OpenExam", {
              duration: 2000,
            });
          }
          this.reloadTable(this.status);
        });
      }
      this.reloadTable(this.status);
    }
  }

  onFinish(id) {
    var rs = confirm("Kết thuc kỳ thi có id là" + id + "?");
    if (rs == true) {
      this.examService.finish(id).subscribe(data => {
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
