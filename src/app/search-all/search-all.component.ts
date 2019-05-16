import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.css']
})
export class SearchAllComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private courseService: CourseService,
    private newsService: NewsService) { }

  courses: any;
  news: any;
  searchs_id = [];
  searchs_title = [];
  data_search = [];
  key = "";
  newsSearch = [];
  courseSearch = [];
  page = 1;
  dem = 0;
  total = [];

  ngOnInit() {
    this.router.params.subscribe(data => {
      this.key = data.key;
      this.page = data.page;
      this.courseService.getData().subscribe(data => {
        this.courses = data;
        for (var i = 0; i < this.courses.length; i++) {
          this.searchs_id.push(this.courses[i].idCourse + "-course");
          this.searchs_title.push(this.courses[i].course + " " + this.courses[i].level.level + "+" + this.courses[i].image);
        }
        this.newsService.getData().subscribe(data => {
          this.news = data;
          for (var i = 0; i < this.news.length; i++) {
            this.searchs_id.push(this.news[i].idNews + "-news");
            this.searchs_title.push(this.news[i].title + "+" + this.news[i].avatar);
          }
          for (var i = 0; i < this.searchs_id.length; i++) {
            if (this.searchs_title[i].toLowerCase().indexOf(this.key.toLowerCase()) != -1) {
              var type = this.searchs_id[i].split('-')[1];
              var id = this.searchs_id[i].split('-')[0];
              if (type == 'news') {
                this.newsService.getDataById(id).subscribe(rs => {
                  this.newsSearch.push(rs);
                });
                this.dem++;
              } else if (type == 'course') {
                this.courseService.getDataById(id).subscribe(rs => {
                  if (Number(rs['status']) == 1) {
                    this.courseSearch.push(rs);
                  }
                });
                this.dem++;
              }
            }
          }
          if (this.dem % 2 == 0) {
            for (var i = 0; i < this.dem / 2; i++) {
              this.total.push(i);
            }
          } else {
            for (var i = 0; i < this.dem / 2 + 1; i++) {
              this.total.push(i);
            }
          }
        });
      });
    });
  }

}
