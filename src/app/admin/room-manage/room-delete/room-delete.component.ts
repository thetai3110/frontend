import { Component, OnInit, Inject } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-room-delete',
  templateUrl: './room-delete.component.html',
  styleUrls: ['./room-delete.component.css']
})
export class RoomDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RoomDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private roomService: RoomService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onDel(id){
    this.roomService.deleteData(id).subscribe(data =>{
      if(String(data) === "true"){
        this.snackBar.open("Success!!!", "Delete", {
          duration: 2000,
        });
      }else{
        this.snackBar.open("Fail!!!", "Delete", {
          duration: 2000,
        });
      }
      this.onCancel();
    })
  }

}
