import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsSerivice: NewsService,
              private router: ActivatedRoute) { }

  news: any;
  total= [];
  page = 1;

  ngOnInit() {
    this.router.params.subscribe(data =>{
      this.page = Number(data.page);
      this.newsSerivice.paging(this.page).subscribe(data =>{
        this.news = data;
      });
    });
    this.newsSerivice.total().subscribe(t => {
      for(var i = 1; i<= Number(t);i++){
        this.total.push(i);
      }
    });
  }

}
