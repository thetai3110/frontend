import { Component, OnInit, Inject } from '@angular/core';
import { LecturersService } from 'src/app/services/lecturers.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-lecturers-delete',
  templateUrl: './lecturers-delete.component.html',
  styleUrls: ['./lecturers-delete.component.css']
})
export class LecturersDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LecturersDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lecturersService: LecturersService) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onDel(id){
    this.lecturersService.deleteData(id).subscribe(data =>{
      if(String(data) === "true"){
        this.onCancel();
      }else{
        console.log(data);
      }
    })
  }

}
