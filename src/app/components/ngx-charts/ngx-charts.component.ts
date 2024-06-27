import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexNonAxisChartSeries,
} from "ng-apexcharts";



export const data = [
  
  {
    month:"jan",
    value:10,
  },
  {
    month:"feb",
    value:30
  },
  {
    month:"march",
    value:100
  },
  {
    month:"april",
    value:80
  },
  {
    month:"may",
    value:20
  },
  {
    month:"june",
    value:30
  },
  {
    month:"july",
    value:60
  },
  {
    month:"August",
    value:50
  },
  {
    month:"sep",
    value:30
  },
  {
    month:"oct",
    value:10
  },
  {
    month:"nov",
    value:70
  },
  {
    month:"dec",
    value:90
  },
 
]


@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.scss']
})
export class NgxChartsComponent {
 public series:ApexAxisChartSeries;
 public seriestwo:ApexNonAxisChartSeries;
 public chart:ApexChart;
 public piechart:ApexChart;
 public title:ApexTitleSubtitle
 public yaxis: ApexYAxis;
 public xaxis: ApexXAxis;
 public labels: any;
 public theme!: ApexTheme;




  constructor() {

    let percentage = [];
    for (let i = 0; i < 12; i++) {
      percentage.push(data[i].value);
    }

    this.series = [
      {
        name: "XYZ MOTORS",
        data: percentage,
      }
    ];

    this.chart = {
      type: "area",
      stacked: false,
      height: 350,
    };
    
    this.title = {
      text: "Stock Price Movement",
      align: "left"
    };


    this.yaxis = {
      title: {
        text: "Percentage"
      }
    };

    
    let months = [];
    for (let i = 0; i < 12; i++) {
      months.push(data[i].month);
    }
    this.xaxis = {
      categories:months,
    };
  

    this.seriestwo = [25, 15, 44, 55, 41, 17],
    this.piechart = {
      width: "100%",
      type: "pie"
    }
    this.labels = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]

    this.theme = {
      monochrome: {
        enabled: true
      }
    }

  }






  
}
