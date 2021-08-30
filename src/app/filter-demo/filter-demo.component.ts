import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-demo',
  templateUrl: './filter-demo.component.html',
  styleUrls: ['./filter-demo.component.css']
})
export class FilterDemoComponent implements OnInit {
  data = [];
  searchText;
  constructor() {
    this.data = [
      {
        name: 'Jayesh',
        price: 15123
      },
      {
        name: 'Rakshit',
        price: 45000
      },
      {
        name: 'Jayant',
        price: 50911
      },
      {
        name: 'ADANI',
        price: 50777
      }
    ];
  }

  ngOnInit() {}
}
