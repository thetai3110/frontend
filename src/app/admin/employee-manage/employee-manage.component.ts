import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  employees : {};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(){
    this.employeeService.getData().subscribe(data =>{
      this.employees = data;
    });
  }

}
