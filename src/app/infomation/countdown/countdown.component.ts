import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() dayStart: Date;
  
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.getCountdown();
    }, 1000);
  }

  days="00"; hours="00"; minutes="00"; seconds="00";

  getCountdown() {
    var countDownDate = new Date(this.dayStart).getTime();
      var now = new Date().getTime();
      // Lấy số thời gian chênh lệch
      var distance = countDownDate - now;
      // Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24)) +"";
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+"";
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) +"";
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000)+"";
      if(Number(this.days) < 10) this.days = "0" + this.days;
      if(Number(this.hours) < 10) this.hours = "0" + this.hours;
      if(Number(this.minutes) < 10) this.minutes = "0" + this.minutes;
      if(Number(this.seconds) < 10) this.seconds = "0" + this.seconds;
  }

}
