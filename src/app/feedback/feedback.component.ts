import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { faUserGraduate, faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedBackService: FeedbackService,
              private router: ActivatedRoute) { }

  feedBacks: any;
  faUserGraduate = faUserGraduate; faStar = faStar;
  total= [];
  page = 1;

  ngOnInit() {
    this.router.params.subscribe(data =>{
      this.page = Number(data.page);
      this.feedBackService.paging(this.page).subscribe(rs => {
        this.feedBacks = rs;
      });
    });
    this.feedBackService.total().subscribe(t => {
      for(var i = 1; i<= Number(t);i++){
        this.total.push(i);
      }
    });
  }

}
