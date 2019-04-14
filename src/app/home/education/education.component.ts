import { Component, OnInit } from '@angular/core';
import {
  faNetworkWired, faLaptopCode, faMobileAlt,
  faCheckSquare, faDatabase, faPalette, faPrint, faWifi
} from '@fortawesome/free-solid-svg-icons';
import { EducationprogramService } from 'src/app/services/educationprogram.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private educationProgramService: EducationprogramService) { }

  icons = {
    faNetworkWired: faNetworkWired, faLaptopCode: faLaptopCode,
    faMobileAlt: faMobileAlt, faCheckSquare: faCheckSquare,
    faDatabase: faDatabase, faPalette: faPalette, faPrint: faPrint, faWifi: faWifi
  };

  color = [];
  edu: any;

  ngOnInit() {
    this.educationProgramService.getData().subscribe(data => {
      if (data != null)
        this.edu = data;
      for (var i = 0; i < this.edu.length; i++) {
        var a = Math.floor((Math.random() * 255)), b = Math.floor((Math.random() * 255)), c = Math.floor((Math.random() * 255));;
        var r = 'rgb(' + a + ',' + b + ',' + c + ')';
        this.color.push(r);
        a++; b++; c++;
      }
    });
  }

}
