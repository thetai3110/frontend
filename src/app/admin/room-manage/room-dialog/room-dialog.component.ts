import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-dialog',
  templateUrl: './room-dialog.component.html',
  styleUrls: ['./room-dialog.component.css']
})
export class RoomDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private roomService: RoomService,
    private snackBar: MatSnackBar) { }

    form: FormGroup = new FormGroup({
      roomName: new FormControl(this.data.stu.roomName, [Validators.required]),
      size: new FormControl(this.data.stu.size, [Validators.required]),
      status: new FormControl(String(this.data.stu.status))
    });


  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
   
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.roomService.updateData(this.data.stu.idRoom, form).subscribe(data =>{
      if(data != null){
        this.snackBar.open("Success!!!", "Update", {
          duration: 2000,
        });
      }else{
        this.snackBar.open("Fail!!!", "Update", {
          duration: 2000,
        });
      }
    this.onCancel();
    });
  }
}
