import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public chartType: string = '1';
  public dataSet = {
    source: [
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1],
    ],
    dimensions: [
      { name: 'product', type: 'ordinal' },
      { name: '2015', type: 'float' },
      { name: '2016', type: 'float' },
      { name: '2017', type: 'float' },
    ],
  };
}
