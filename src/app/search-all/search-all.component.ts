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
  count_search = 0;
  rs = [];
  total = [];

  ngOnInit() {
    this.router.params.subscribe(data => {
      this.key = data.key;
      this.page = Number(data.page);
      this.searchs_id = [];
      this.searchs_title = [];
      this.data_search = [];
      this.newsSearch = [];
      this.courseSearch = [];
      this.dem = 0;
      this.count_search = 0;
      this.rs = [];
      this.total = [];
    
      this.courseService.getDataByStatus(1).subscribe(data => {
        this.courses = data;
        //Tất cả dữ liệu
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
          //Kết quả search
          for (var i = 0; i < this.searchs_id.length; i++) {
            if (this.searchs_title[i].toLowerCase().indexOf(this.key.toLowerCase()) != -1) {
              this.count_search++;
              this.rs.push(this.searchs_id[i]);
            }
          }
          //Phân trang
          for (var i = (this.page - 1) * 2; i < this.rs.length; i++) {
            if (this.dem == 2) break;
            else {
              var type = this.rs[i].split('-')[1];
              var id = this.rs[i].split('-')[0];
              if (type == 'news') {
                this.newsService.getDataById(id).subscribe(rs1 => {
                  this.newsSearch.push(rs1);
                });
                this.dem++;
              } else if (type == 'course') {
                this.courseService.getDataById(id).subscribe(rs1 => {
                  this.courseSearch.push(rs1);
                });
                this.dem++;
              }
            }
          }
          //Tổng số trang
          if (this.count_search % 2 == 0) {
            for (var i = 0; i < this.count_search / 2; i++) {
              this.total.push(i);
            } 
          } else {
            for (var i = 0; i < Math.floor(this.count_search / 2 + 1); i++) {
              this.total.push(i);
            }
          }
        });
      });
    });
  }

}
