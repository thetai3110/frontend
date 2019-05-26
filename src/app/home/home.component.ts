import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private courseService: CourseService,
    private newsService: NewsService) { }

  courses: any;
  news: any;

  ngOnInit() {
    this.courseService.getDataByStatus(1).subscribe(data => {
      if (data != null)
        this.courses = data;
    });
    this.newsService.getData().subscribe(data => {
      this.news = data;
    });
  }

}
