import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { MarksService } from 'src/app/services/marks.service';
import { ClassesService } from 'src/app/services/classes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['../../../../assets/css/table.css']
})
export class MarksComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'course', 'class', 'student', 'cmnd', 'marks', 'tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  marks = [];
  allClass: any;
  idClass = 1;

  form: FormGroup = new FormGroup({
    marks: new FormControl("", Validators.pattern("[0-9]*")),
  });

  constructor(private marksService: MarksService,
    private classesService: ClassesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.classesService.getData().subscribe(data =>{
      this.allClass = data;
    });
    this.reloadTable(this.idClass);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(id) {
    this.marksService.getDataByClass(id).subscribe(rs => {
      if (!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onMarks(e, id) {
    if (e.target.value != "") {
      this.marks.push(e.target.value + "-" + id);
    } else {
      var m;
      for (var i = 0; i < this.marks.length; i++) {
        m = this.marks[i].split("-");
        if (m[1] == id) {
          var pos = this.marks.indexOf(this.marks[i]);
          this.marks.splice(pos, 1);
        }
      }
    }
  }

  onSave(e, id) {
    var m, rs = "";
    for (var i = 0; i < this.marks.length; i++) {
      m = this.marks[i].split("-");
      if (m[1] == id) {
        rs = m[0];
      }
    }
    if (rs != "") {
      this.marksService.save(id, rs).subscribe(data => {
        if (data != null) {
          this.snackBar.open("Success!!!", "Update Marks", {
            duration: 2000,
          });
        } else {
          this.snackBar.open("Fail!!!", "Update Marks", {
            duration: 2000,
          });
        }
        this.reloadTable(this.idClass);
      });
    }
  }

  onSaveAll() {
    var rs = confirm("Lưu toàn bộ thay đổi?");
    if (rs == true) {
      if (this.marks != null) {
        this.marksService.saveAll(this.marks).subscribe(data => {
          if (data != null) {
            this.snackBar.open("Success!!!", "Update Marks", {
              duration: 2000,
            });
          } else {
            this.snackBar.open("Fail!!!", "Update Marks", {
              duration: 2000,
            });
          }
          this.reloadTable(this.idClass);
        });
      }
    }
  }

  chooseClass(e){
    this.idClass = e.target.value;
    this.reloadTable(e.target.value);
  }

}
