import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RoomService } from 'src/app/services/room.service';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { RoomDialogComponent } from '../room-dialog/room-dialog.component';
import { RoomDeleteComponent } from '../room-delete/room-delete.component';
import { RoomFormComponent } from '../room-form/room-form.component';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.css']
})
export class RoomTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faPen = faPen; faTrashAlt = faTrashAlt; faPlusCircle = faPlusCircle;
  displayedColumns= ['id','name','size','status','tool'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource;
  result : any;

  constructor(private roomService: RoomService,
          public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadTable();
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id): void {
    this.roomService.getDataById(id).subscribe(data =>{
      this.result = data;
      const dialogRef = this.dialog.open(RoomDialogComponent, {
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
    const dialogRef = this.dialog.open(RoomDeleteComponent, {
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
    const dialogRef = this.dialog.open(RoomFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadTable();
    });
  }
  
  reloadTable(){
    this.roomService.getData().subscribe(rs =>{
      if(!rs)
        return;
      this.dataSource = new MatTableDataSource(rs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
