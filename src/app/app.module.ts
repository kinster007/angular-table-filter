import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TableFilterPipe } from './table-filter.pipe';
import { FilterDemoComponent } from './filter-demo/filter-demo.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TableFilterPipe, FilterDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
