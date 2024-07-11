import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EchartViewComponent } from './echart-view/echart-view.component';

import { TableViewComponent } from './table-view/table-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
  ],
  declarations: [AppComponent, EchartViewComponent, TableViewComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
