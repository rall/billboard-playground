import {Component} from '@angular/core';
import {ChartConfiguration, Data} from 'billboard.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: ChartConfiguration = {
    zoom: {
      enabled: true
    },
    subchart: {
      show: true
    },
    legend: {
      contents: {
        bindto: ""
      }
    }
  };

  data: Data = {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ]
  };
}
