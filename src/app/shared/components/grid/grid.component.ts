import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GridService } from './grid service/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() type: String;
  displayedColumns = ['Index', 'Comments','News', 'author'];;
  dataSource = new MatTableDataSource([]);
  news: any = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public gridService: GridService) { }

  ngOnInit(): void {
    switch (this.type) {
      case 'news-feed': {
        this.getAllNewsFeed();
        break;
      }
      default: {

      }
    }
  }
  getAllNewsFeed() {
    if(sessionStorage.getItem('news')) {
      this.news = JSON.parse(sessionStorage.getItem('news'));
      this.dataSource = new MatTableDataSource(this.news.hits);
    }else {
      this.gridService.getNewsFeed().subscribe((resp) => {
        this.news = resp;
        this.dataSource = new MatTableDataSource(this.news.hits);
        sessionStorage.setItem('news',JSON.stringify(this.news));
      })
    }
  }
  increaseCount(element) {
     // Update count
     this.news.hits.map(function(item){
        if(item.objectID === element.objectID) {
          item.points++;
        }
     });
     // Update in session storage
     sessionStorage.setItem('news',JSON.stringify(this.news));
    
     // Update Chart
  }
}
