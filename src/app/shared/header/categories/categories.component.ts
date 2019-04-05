import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faUser, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from 'src/app/services/account.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  faHome = faHome; faSearch = faSearch; faUser = faUser; 
  faSignOutAlt = faSignOutAlt; faSignInAlt = faSignInAlt;
  username : string;
  isLogin= false;
  img = "";
  constructor(private accountService: AccountService,
            private studentService: StudentService) { }

  ngOnInit() {
    if(localStorage.getItem("username") != null){
      this.username = localStorage.getItem("username");
      this.isLogin = true;
    }
    this.accountService.getDataByUsername(this.username).subscribe(data=>{
      if(data != null){
        this.studentService.getDataByAccount(Number(data['idAccount'])).subscribe(stu =>{
         this.img = stu['image'];
        });
      }
    });
  }

}
