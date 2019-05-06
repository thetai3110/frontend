import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faUser, faSignOutAlt, faSignInAlt, faCalendarAlt, faNetworkWired, faMobileAlt, faDatabase, faPalette, faCheckSquare, faLaptopCode, faPrint, faWifi } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from 'src/app/services/student.service';
import { EducationprogramService } from 'src/app/services/educationprogram.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  faHome = faHome; faSearch = faSearch; faUser = faUser; 
  faSignOutAlt = faSignOutAlt; faSignInAlt = faSignInAlt; faCalendarAlt = faCalendarAlt;
  icons = {
    faNetworkWired: faNetworkWired, faLaptopCode: faLaptopCode,
    faMobileAlt: faMobileAlt, faCheckSquare: faCheckSquare,
    faDatabase: faDatabase, faPalette: faPalette, faPrint: faPrint, faWifi: faWifi
  };
  username : string;
  isLogin= false;
  img = "";
  edu : {};
  constructor(private studentService: StudentService,
            private educationProgramService: EducationprogramService) { }

  ngOnInit() {
    if(localStorage.getItem("username") != null){
      this.username = localStorage.getItem("username");
      this.isLogin = true;
    }
    // this.accountService.getDataByUsername(this.username).subscribe(data=>{
    //   if(data != null){
    //     this.studentService.getDataByAccount(Number(data['idAccount'])).subscribe(stu =>{
    //       if(stu != null)
    //         this.img =  stu['image'] == null ? "" :  stu['image'];
    //     });
    //   }
    // }); 
    this.educationProgramService.getData().subscribe(data =>{
      if(data !=null)
        this.edu = data;
    });
  }

}
