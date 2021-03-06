import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ClassesService } from 'src/app/services/classes.service';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { MatSnackBar } from '@angular/material';
import { faHandshake, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { InvoiceService } from 'src/app/services/invoice.service';
import { SalesService } from 'src/app/services/sales.service';


@Component({
  selector: 'app-accuracy-form',
  templateUrl: './accuracy-form.component.html',
  styleUrls: ['./accuracy-form.component.css']
})
export class AccuracyFormComponent implements OnInit {

  isLinear = false;
  isCard = false;
  isPlace = true;
  group = 1;
  isPay = false;
  faHandshake = faHandshake; faTimesCircle = faTimesCircle; faCheckCircle = faCheckCircle;
  isFee = 0;
  formula = "Thẻ ngân hàng";
  yes = true;
  no = true;
  constructor(private classService: ClassesService,
    private salesService: SalesService,
    private invoiceService: InvoiceService,
    private router: ActivatedRoute,
    private registerService: RegisterService,
    private snackBar: MatSnackBar) { }
  classes = [];
  fee: Number; space: String; roomName: String;
  curFee: Number;
  payment = "no";
  firstFormGroup: FormGroup;
  idClass = 0;
  days: Date;
  kt = 0;
  ckeck = 0;

  secondFormGroup: FormGroup = new FormGroup({
    nameRegister: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    job: new FormControl(''),
    idSale: new FormControl(''),
    groupNum: new FormControl(''),
    isFee: new FormControl(''),
    payment: new FormControl(''),
    formula: new FormControl(''),
    status: new FormControl('0'),
    idClass: new FormControl('')
  });

  ngOnInit() {
    setTimeout(() => {
      this.router.params.subscribe(data => {
        this.idClass = data.idClass;
        this.classService.getDataById(data.idClass).subscribe(classes => {
          this.classes = classes;
          this.curFee = classes['course'].fee;
          this.fee = this.curFee;
          this.space = classes['course'].space;
          this.roomName = classes['room'].roomName;
        });
      });
    }, 1000)
  }

  public hasError = (form: FormGroup, controlName: string, errorName: string) => {
    return form.controls[controlName].hasError(errorName);
  }

  onChange(e) {
    if (Number(e.value) == 1) {
      this.isCard = false;
      this.isPlace = true;
      this.formula = "Thẻ ngân hàng";
    } else {
      this.isPlace = false;
      this.isCard = true;
      this.payment = "no";
      this.formula = "Trực tiếp";
    }
  }

  selectNum(event) {
    this.group = event.target.value;
    if (Number(this.group) == 1) this.fee = Number(this.group) * Number(this.curFee);
    if (Number(this.group) == 3) this.fee = Number(this.group) * Number(this.curFee) - 150000;
    if (Number(this.group) == 5) this.fee = Number(this.group) * Number(this.curFee) - 350000;
    if (Number(this.group) == 7) this.fee = Number(this.group) * Number(this.curFee) - 700000;

  }

  onSubmit(form) {
    this.kt = 0;
    this.ckeck = 0;
    form.groupNum = this.group;
    form.formula = this.formula;
    if (this.isCard == false && this.payment == "no") {
      alert("Chưa chọn phương thức thanh toán");
    } else {
      form.idClass = this.idClass;
      if (this.payment != 'no') {
        form.payment = this.payment;
        form.isFee = 1;
      } else {
        form.isFee = 0;
      }
      this.registerService.postData(form).subscribe(data => {
        if (data != null) {
          this.snackBar.open("Success!!!", "Add", {
            duration: 2000,
          });
          this.isPay = true;
          this.classService.getDataById(this.idClass).subscribe(classes => {
            this.days = classes['dayStart'];
            if (Number(form.isFee) == 1) {
              var invoice = {
                idClass: classes['idClass'],
                studentName: form.nameRegister,
                idEmployee: '',
                dateInvoice: new Date(),
                groupNum: form.groupNum,
                cost: this.fee,
                payment: form.payment,
                idRegister: data['idRegister']
              }
              this.invoiceService.postData(invoice).subscribe(inv => {
                if (inv != null) {
                  console.log("Success");
                } else {
                  console.log("fail");
                }
              });
            }
          });
        } else {
          this.snackBar.open("Fail!!!", "Add", {
            duration: 2000,
          });
        }
      });
    }
  }


  checkSales() {
    if (this.secondFormGroup.value.idSale == "") {
      this.yes = true;
      this.no = true;
    } else {
      this.salesService.getDataByCode(this.secondFormGroup.value.idSale).subscribe(data => {
        if (data != null) {
          this.yes = false;
          this.no = true;
          if(this.kt == 0){
            this.ckeck = Number(this.fee) * (Number(data['describes'])/100);
            this.fee = Number(this.fee) - Number(this.fee) * (Number(data['describes'])/100);
            this.kt = 1;
          }
        } else {
          if(this.kt == 1){
            this.fee = Number(this.fee) + this.ckeck;
            this.kt = 0;
          }
          this.yes = true;
          this.no = false;
        }
      });
    }
  }

}
