import { Component, OnInit, ViewChild } from '@angular/core';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { NewsService } from 'src/app/services/news.service';
import { NewsDialogComponent } from '../news-dialog/news-dialog.component';
import { NewsDeleteComponent } from '../news-delete/news-delete.component';
import { NewsFormComponent } from '../news-form/news-form.component';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['../../../../assets/css/table.css']
})
export class NewsTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns= ['id','course','title','describes','content','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;

  constructor(private newService: NewsService,
          public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable();
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id): void {
    this.newService.getDataById(id).subscribe(data =>{
      this.result = data;
      const dialogRef = this.dialog.open(NewsDialogComponent, {
        width: '500px',
        data:{
          stu : this.result
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.reloadTable();
      });
    });
  }

  onDelete(id): void {
    const dialogRef = this.dialog.open(NewsDeleteComponent, {
      width: '250px',
      data:{
          id : id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }

  onOpenDialogAdd(){
    const dialogRef = this.dialog.open(NewsFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }
  
  reloadTable(){
    this.newService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
