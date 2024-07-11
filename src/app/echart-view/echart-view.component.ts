import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-echart-view',
  templateUrl: './echart-view.component.html',
  styleUrls: ['./echart-view.component.css'],
})
export class EchartViewComponent implements OnInit {
  private _chartType = '1';
  @Input('chart-type')
  public set chartType(newType: string) {
    this._chartType = newType;
    this.refreshChart();
  }
  public get chartType(): string {
    return this._chartType;
  }

  constructor(private elm: ElementRef) {}
  private theChartRef: any;

  private _dataSet;
  @Input('data-set')
  public set dataSet(newData: any) {
    this._dataSet = newData;
    this.refreshChart();
  }
  public get dataSet(): any {
    return this._dataSet;
  }

  ngOnInit() {}

  refreshChart() {
    if (this._chartType == '1') {
      this.showPieChart();
    } else if (this._chartType == '2') {
      this.showBarChart();
    }
  }

  showPieChart() {
    let chartDom = this.elm.nativeElement.querySelector('#theChartDiv')!;
    this.theChartRef = echarts.init(chartDom);
    this.theChartRef.setOption({
      legend: {},
      tooltip: {},
      dataset: this.dataSet,
      series: [
        {
          type: 'pie',
          encode: {
            itemName: 'product',
            value: '2016',
          },
        },
      ],
    });
  }

  showBarChart() {
    let chartDom = this.elm.nativeElement.querySelector('#theChartDiv')!;
    this.theChartRef = echarts.init(chartDom);
    this.theChartRef.setOption({
      legend: {},
      tooltip: {},
      dataset: this.dataSet,
      series: [
        { type: 'bar', stack: 's1', encode: { x: 'product', y: '2015' } },
        { type: 'bar', stack: 's1', encode: { x: 'product', y: '2016' } },
        { type: 'bar', stack: 's1', encode: { x: 'product', y: '2017' } },
      ],
      xAxis: { type: 'category' },
      yAxis: { type: 'value' },
    });
  }
}
