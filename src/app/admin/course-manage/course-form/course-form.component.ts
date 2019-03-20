import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../services/upload.service';
import { CourseService } from '../../../services/course.service';
import { LevelService } from '../../../services/level.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent implements OnInit {

  public course = {
    idLevel : "",
    course : "",
    duration : "",
    dayStart : "",
    fee : "",
    sale : "",
    space : "",
    condition : "",
    describes : "",
    status : "",
    image : ""
  };

  public allLevel : {};
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private levelService: LevelService, 
              private uploadService: UploadService,
              private courseService: CourseService) { }

  ngOnInit() {
    this.getLevel();
  }

  onSubmit(){
    this.courseService.postData(this.course).subscribe(data =>{
      if(data!= null){
        alert('Success!');
      }
    });
  }

  getLevel(){
    this.levelService.getData().subscribe(data =>{
      this.allLevel = data;
    });
  }
  
  onFileSelected(event){
    console.log(event);
    this.selectedFiles = event.target.files;
  }

  onUpload(){
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }
}
