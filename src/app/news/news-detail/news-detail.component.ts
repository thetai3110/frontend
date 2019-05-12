import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor(private newsService: NewsService,
              private router: ActivatedRoute) { }

  news = {};
  id = 1;

  ngOnInit() {
    this.router.params.subscribe(data =>{
      this.id = data.id;
    });
    this.getData();
  }

  getData(){
    console.log(this.id);
    this.newsService.getDataById(this.id).subscribe(rs =>{
      this.news = rs;
      this.newsService.view(this.id, rs).subscribe();
    });
  }
}
