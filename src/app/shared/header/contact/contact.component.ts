import { Component, OnInit } from '@angular/core';
import { faPhoneVolume, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faPhoneVolume = faPhoneVolume;
  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;

  constructor() { }

  ngOnInit() {
  }

}
