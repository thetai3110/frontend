import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  public employee = {
    employeeName : "",
    cmnd : "",
    employeeDate : "",
    sex : "",
    address : "",
    email : "",
    phone : "",
    salary : "",
    roles : ""
  };

  constructor(private employeeService: EmployeeService) { }

  onSubmit(){
    this.employeeService.postData(this.employee).subscribe(data =>{
      if(data!= null){
        alert('Success!');
      }
    });
  }

  ngOnInit() {
  }

}
