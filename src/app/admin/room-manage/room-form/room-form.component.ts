import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  constructor(private roomService: RoomService,
             public dialogRef: MatDialogRef<RoomFormComponent>,
             private snackBar: MatSnackBar) { }

  form: FormGroup = new FormGroup({
    roomName: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    status: new FormControl(''),
  });

  ngOnInit() {
    
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.roomService.postData(form).subscribe(data =>{
      if(data != null){
        this.snackBar.open("Success!!!", "Add", {
          duration: 2000,
        });
      }else{
        this.snackBar.open("Fail!!!", "Add", {
          duration: 2000,
        });
      }
      this.onCancel();
    });
  }

}
