import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  constructor(private studentService: StudentService,
              private accountService: AccountService) { }

  username = localStorage.getItem("username");
  idStudent: Number;

  ngOnInit() {
    this.accountService.getDataByUsername(this.username).subscribe(data=>{
      if(data != null){
        this.studentService.getDataByAccount(Number(data['idAccount'])).subscribe(stu =>{
          this.idStudent = stu['idStudent'];
        });
      }
    });
  }

}
