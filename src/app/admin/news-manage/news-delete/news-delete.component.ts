import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-delete',
  templateUrl: './news-delete.component.html',
  styleUrls: ['./news-delete.component.css']
})
export class NewsDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private newsService: NewsService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onDel(id) {
    this.newsService.deleteData(id).subscribe(data => {
      if (String(data) === "true") {
        this.snackBar.open("Success!!!", "Delete", {
          duration: 2000,
        });
      } else {
        this.snackBar.open("Fail!!!", "Delete", {
          duration: 2000,
        });
      }
      this.onCancel();
    })
  }


}
