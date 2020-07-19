import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GridService } from './grid service/grid.service';
import { NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() type: string;
  displayedColumns = ['Index', 'Comments', 'News', 'author'];
  dataSource = new MatTableDataSource([]);
  news: any = [];
  totalPage = 0;
  totalRecords = 0;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  private chart: am4charts.XYChart;
  constructor(public gridService: GridService, private zone: NgZone) { }

  ngOnInit(): void {
    switch (this.type) {
      case 'news-feed': {
        this.getAllNewsFeed(false, 0);
        this.initChart();
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
      this.initChart();
    } else {
      this.gridService.getNewsFeed(isPagination, pageNumber).subscribe((resp) => {
        this.news = resp;
        this.dataSource = new MatTableDataSource(this.news.hits);
        sessionStorage.setItem('news', JSON.stringify(this.news));
        this.initChart();
      });
    }
    this.totalPage = this.news.nbPages;
    this.totalRecords = this.news.nbHits;
  }

  increaseCount(element) {
    // Update count
    this.news.hits.map(function (item) {
      if (item.objectID === element.objectID) {
        item.points++;
      }
    });
    // Update in session storage
    sessionStorage.setItem('news', JSON.stringify(this.news));

    // Update Chart
    this.initChart();
  }

  getPagination(event) {
    this.getAllNewsFeed(true, event.pageIndex + 1);
  }

  hideFeed(element) {
    const index = this.news.hits.findIndex((item) => item.objectID === element.objectID);
    this.news.hits.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.news.hits);
    sessionStorage.setItem('news', JSON.stringify(this.news));
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  initChart() {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = this.generateChartData();
    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.ValueAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.valueX = "objectID";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12, 12, 12, 12)

    // Add scrollbar
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;
  }
  generateChartData() {
    let chartData = [];
    let i = 1;
    for (let item of this.news.hits) {
      // data.push({ objectID: item.objectID, value: item.num_comments });
      chartData.push({
        objectID: i,
        value: item.points
      });
      i++
    }



    return chartData;
  }
}
