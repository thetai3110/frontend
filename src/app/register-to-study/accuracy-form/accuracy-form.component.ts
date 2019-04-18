import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ClassesService } from 'src/app/services/classes.service';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { MatSnackBar } from '@angular/material';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-accuracy-form',
  templateUrl: './accuracy-form.component.html',
  styleUrls: ['./accuracy-form.component.css']
})
export class AccuracyFormComponent implements OnInit {

  isLinear = false;
  isCard = true;
  isPlace = true;
  group = 1;
  isPay = false;
  faHandshake = faHandshake;

  constructor(private classService: ClassesService,
              private router: ActivatedRoute,
              private registerService: RegisterService,
              private snackBar: MatSnackBar) {}
  classes = [];
  fee: Number; space: String; roomName: String;

  firstFormGroup: FormGroup;

  secondFormGroup: FormGroup = new FormGroup({
    nameRegister: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    job: new FormControl(''),
    idSale: new FormControl(''),
    groupNum: new FormControl('')
  });

  ngOnInit() {
    setTimeout(()=>{
      this.router.params.subscribe(data =>{
        this.classService.getDataById(data.idClass).subscribe(classes =>{
          this.classes = classes;
          this.fee = classes['course'].fee;
          this.space = classes['course'].space;
          this.roomName = classes['room'].roomName;
        });
      });
    }, 1000)
  }

  public hasError = (form: FormGroup, controlName: string, errorName: string) => {
    return form.controls[controlName].hasError(errorName);
  }

  onChange(e){
    if(Number(e.value) == 1){
      this.isCard = false;
      this.isPlace = true;
    }else{
      this.isPlace = false;
      this.isCard = true;
    }
  }

  onChoose(){

  }

  selectNum(event){
    this.group = event.target.value
  }
  
  onSubmit(form){
    form.groupNum = this.group;
    this.registerService.postData(form).subscribe(data =>{
      if(data != null){
        this.snackBar.open("Success!!!", "Add", {
          duration: 2000,
        });
        this.isPay = true;
      }else{
        this.snackBar.open("Fail!!!", "Add", {
          duration: 2000,
        });
      }
    })
  }
}
