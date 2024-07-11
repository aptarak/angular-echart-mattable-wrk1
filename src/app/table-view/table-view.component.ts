import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = [];

  private _dataSet;
  @Input('data-set')
  public set dataSet(newData: any) {
    this._dataSet = newData;

    this.displayedColumns = [];
    for (let i = 0; i < this._dataSet['dimensions'].length; i++) {
      this.displayedColumns.push(this._dataSet['dimensions'][i]['name']);
    }
    this.dataSource = this._dataSet.source;
  }
  public get dataSet(): any {
    return this._dataSet;
  }

  constructor() {}

  ngOnInit(): void {}
}
