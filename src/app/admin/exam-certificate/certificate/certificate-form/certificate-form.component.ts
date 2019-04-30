import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort, MatSnackBar, MatDialogRef } from '@angular/material';
import { MarksService } from 'src/app/services/marks.service';
import { ClassesService } from 'src/app/services/classes.service';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['../../../../../assets/css/table.css']
})
export class CertificateFormComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'course', 'class', 'student', 'cmnd', 'marks', 'tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  allClass: any;
  idClass = 1;
  marks = [];
  allMarks: any;

  constructor(private marksService: MarksService,
    private classesService: ClassesService,
    private certificateService: CertificateService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CertificateFormComponent>,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.classesService.getData().subscribe(classes => {
      this.allClass = classes;
    });
    this.getMarks(this.idClass);
    this.reloadTable(this.idClass);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(id) {
    this.marksService.getDataByClassAndMarks(id).subscribe(rs => {
      if (!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  getMarks(id) {
    this.marksService.getDataByClassAndMarks(id).subscribe(rs => {
      if (rs != null) {
        this.allMarks = rs;
        for (var i = 0; i < this.allMarks.length; i++) {
          this.marks.push(this.allMarks[i].idMarks);
        }
      }
    });
  }

  chooseClass(e) {
    this.idClass = e.target.value;
    this.marks = [];
    this.getMarks(this.idClass);
    this.reloadTable(e.target.value);
  }

  onChange(e, id) {
    if(e.checked == true){
      this.marks.push(id);
    }else{
      var pos = this.marks.indexOf(id);
      this.marks.splice(pos,1);
    }
  }

  onCreateCertificate() {
    var rs = confirm("Cấp chứng chỉ cho những học viên này?");
    if (rs == true) {
      if (this.marks != null) {
        this.certificateService.createCertificate(this.marks).subscribe(data => {
          if (data != null) {
            this.snackBar.open("Success!!!", "Update Marks", {
              duration: 2000,
            });
          } else {
            this.snackBar.open("Fail!!!", "Update Marks", {
              duration: 2000,
            });
          }
          this.dialogRef.close();
        });
      }
    }
  }

}
