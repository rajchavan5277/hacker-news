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
  @Input() type: string;
  displayedColumns =['Index', 'Comments', 'News', 'author'];
  dataSource = new MatTableDataSource([]);
  news: any = [];
  totalPage = 0;
  totalRecords = 0;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public gridService: GridService) { }

  ngOnInit(): void {
    switch (this.type) {
      case 'news-feed': {
        this.getAllNewsFeed(false, 0);
        break;
      }
      default: {

      }
    }
  }
  getAllNewsFeed(isPagination, pageNumber) {
    if (sessionStorage.getItem('news') && isPagination === false) {
      this.news = JSON.parse(sessionStorage.getItem('news'));
      this.dataSource = new MatTableDataSource(this.news.hits);
    } else {
      this.gridService.getNewsFeed(isPagination, pageNumber).subscribe((resp) => {
        this.news = resp;
        this.dataSource = new MatTableDataSource(this.news.hits);
        sessionStorage.setItem('news', JSON.stringify(this.news));
      });
    }
    this.totalPage = this.news.nbPages;
    this.totalRecords = this.news.nbHits;
  }

  increaseCount(element) {
    // Update count
    this.news.hits.map(function(item) {
      if (item.objectID === element.objectID) {
        item.points++;
      }
    });
    // Update in session storage
    sessionStorage.setItem('news', JSON.stringify(this.news));

    // Update Chart
  }

  getPagination(event) {
    this.getAllNewsFeed(true, event.pageIndex + 1);
  }

  hideFeed(element) {
    const index = this.news.hits.findIndex((item) =>  item.objectID === element.objectID);
    this.news.hits.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.news.hits);
    sessionStorage.setItem('news', JSON.stringify(this.news));
  }
}
