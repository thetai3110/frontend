import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.css']
})
export class InfomationComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private registerService: RegisterService) { }
  
  form: FormGroup = new FormGroup({
    studentName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    cmnd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    studentDate: new FormControl(new Date(),[Validators.required]),
    sex: new FormControl('1', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    job: new FormControl(''),
    idClass: new FormControl('')
  });

  register: any;
  num = 1;
  n = 1;

  data = [];

  ngOnInit() {
    this.router.params.subscribe(data =>{
      if(data != null){
          this.registerService.getDataById(data.id).subscribe(reg =>{
            if(reg != null)
              this.register = reg;
              this.num = reg['groupNum'];
          });
        }
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onSubmit(form){
    this.data[this.n-1] = form;
    console.log(this.data);
  }

  next(form){
    if(this.n < this.num){
      this.data[this.n-1] = form;
      this.n++;
      if(this.data[this.n-1] != null)
        this.loadDataIntoForm(this.data[this.n-1]);
      else
        this.clearForm();
    }
  }

  prev(form){
    if(this.n <= this.num && this.n > 1)
      this.data[this.n-1] = form;
      this.n--;
      if(this.data[this.n-1] != null)
        this.loadDataIntoForm(this.data[this.n-1]);
      else
        this.clearForm();
  }

  loadDataIntoForm(f){
    this.form = new FormGroup({
      studentName: new FormControl(f.studentName, [Validators.required, Validators.maxLength(30)]),
      cmnd: new FormControl(f.cmnd, [Validators.required, Validators.pattern("[0-9]*")]),
      studentDate: new FormControl(new Date(f.studentDate),[Validators.required]),
      sex: new FormControl(String(f.sex), [Validators.required]),
      address: new FormControl(f.address, [Validators.required]),
      email: new FormControl(f.email, [Validators.required, Validators.email]),
      phone: new FormControl(f.phone, [Validators.required, Validators.pattern("[0-9]*")]),
      job: new FormControl(f.job),
      idClass: new FormControl('')
    });
  }

  clearForm(){
    this.form = new FormGroup({
      studentName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      cmnd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      studentDate: new FormControl(new Date(),[Validators.required]),
      sex: new FormControl('1', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      job: new FormControl(''),
      idClass: new FormControl('')
    });
  }
}
