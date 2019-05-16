import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faUser, faSignOutAlt, faSignInAlt, faCalendarAlt, faNetworkWired, faMobileAlt, faDatabase, faPalette, faCheckSquare, faLaptopCode, faPrint, faWifi } from '@fortawesome/free-solid-svg-icons';
import { EducationprogramService } from 'src/app/services/educationprogram.service';
import { CourseService } from 'src/app/services/course.service';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  faHome = faHome; faSearch = faSearch; faUser = faUser;
  faSignOutAlt = faSignOutAlt; faSignInAlt = faSignInAlt; faCalendarAlt = faCalendarAlt;
  icons = {
    faNetworkWired: faNetworkWired, faLaptopCode: faLaptopCode,
    faMobileAlt: faMobileAlt, faCheckSquare: faCheckSquare,
    faDatabase: faDatabase, faPalette: faPalette, faPrint: faPrint, faWifi: faWifi
  };

  username: string;
  isLogin = false;
  img = "";
  edu: {};
  courses: any;
  news: any;
  searchs_id = [];
  searchs_title = [];
  data_search = [];
  key = "";
  isSearch = true;

  constructor(private courseService: CourseService,
    private newsService: NewsService,
    private educationProgramService: EducationprogramService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("username") != null) {
      this.username = localStorage.getItem("username");
      this.isLogin = true;
    }
    this.educationProgramService.getData().subscribe(data => {
      if (data != null)
        this.edu = data;
    });
    this.courseService.getData().subscribe(data => {
      this.courses = data;
      for (var i = 0; i < this.courses.length; i++) {
        this.searchs_id.push(this.courses[i].idCourse + "-course");
        this.searchs_title.push(this.courses[i].course + " " + this.courses[i].level.level + "+" + this.courses[i].image);
      }
    });
    this.newsService.getData().subscribe(data => {
      this.news = data;
      for (var i = 0; i < this.news.length; i++) {
        this.searchs_id.push(this.news[i].idNews + "-news");
        this.searchs_title.push(this.news[i].title + "+" + this.news[i].avatar);
      }
    });
  }

  onSearch(e) {
    this.data_search = [];
    this.key = "";
    if (e.target.value.length < 1) {
      this.isSearch = true;
      this.data_search = [];
    } else {
      this.isSearch = false;
      this.key = e.target.value;
      for (var i = 0; i < this.searchs_id.length; i++) {
        if (this.searchs_title[i].toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
          this.data_search.push(this.searchs_id[i] + "+" + this.searchs_title[i]);
        }
      }
    }
  }

  onSubmit() {
    if (this.key != "") {
      this.router.navigate(['/search-all/', this.key, 1]);
    }
  }
}
