import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-class-delete',
  templateUrl: './class-delete.component.html',
  styleUrls: ['./class-delete.component.css']
})
export class ClassDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClassDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private classesService: ClassesService) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onDel(id){
    this.classesService.deleteData(id).subscribe(data =>{
      if(String(data) === "true"){
        this.onCancel();
      }else{
        console.log(data);
      }
    })
  }
 
}
