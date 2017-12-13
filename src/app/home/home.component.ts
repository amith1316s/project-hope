import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { GetHttpService } from "app/app.services";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import * as Chartist from 'chartist';
import { Chart } from 'angular-highcharts';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

 import { AppComponent } from 'app/app.component';


class LogData {
  date: string;
  time: string;
  host: string;
  messageType: string;
  message: string;
}


declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template:`<div class="main-content"></div>`,
  styleUrls: ['./home.component.css'],
  providers: [GetHttpService]
})
export class HomeComponent implements OnInit {// , AfterViewInit
  // @ViewChild(DataTableDirective)
  // datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  public tableData1: TableData

  logDatas: LogData[] = [];
  // We use this trigger because fetching the list of LogDatas can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();


  private eventCountForDate = ["12135"];
  private errorCountForDate = ["12135"];
  public yymm = "2017-11-";
  public dd = "18";
  public eventtime: string = this.yymm + this.dd;
  public dd1: number;
  public dd2: number;
  public dat: any;
  public datt: any;
  public i = 1;
  public charttime: string[];
  public inputDate: string;
  public data1: any;
  public data2: any;
  public tempDate: any;
  public i0: number;
  public i1: number;
  public i2: number;
  public i3: number;
  public url ='https://b06h5oh5rg.execute-api.us-east-1.amazonaws.com/project/eventTime/';
  
  datee = new Date();


  constructor(private _getHttpService: GetHttpService, private _http: Http, appcom : AppComponent) {
    this._getHttpService = _getHttpService;
    //var x=4;
    // this.index = x.toString();
    this.datee = appcom.datee;        //set submit date in setup to datee variable
    this.getData();
    // this.eventCountForDate=this._getHttpService.getService(this.eventtime)
    //.subscribe(p => this.eventCountForDate = p.Count);

    // this.count=this._getHttpService.getService(this.index)
    // .subscribe(p => this.eventCountForDate = p.Items[0].eventCountForDate.S);


  }
  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.Items || {};
  }

  chart = new Chart({
    chart: {
      type: 'column',
      zoomType: 'x',
    },
    xAxis: {
      type: 'datetime'
    },
    title: {
      text: 'Discover events'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      }
    },

    series: [{
      name: 'Normal events'

    },
    {
      name: ""
    },
    {
      name: ""
    },
    {
      name: "Errors"
    }],
  });


  nextDateData() {
    this.tempDate = parseInt(this.dd);
    this.tempDate += 1;
    this.dd = this.tempDate.toString();
    this.getData();

  }

  preDateData() {
    this.tempDate = parseInt(this.dd);
    this.tempDate -= 1;
    this.dd = this.tempDate.toString();
    this.getData();
  }

  getData() {
    this._http.get(this.url + this.datee)
      .map(this.extractData)
      .subscribe(logDatas => {
        this.logDatas = logDatas;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });


    this._http.get(this.url + this.datee)
      .subscribe((res: Response) => {
        this.data1 = res.json();
        this.datt = this.data1.Count;
        this.i0 = 0, this.i1 = 0, this.i2 = 0, this.i3 = 0;

        for (var i = 0; i < this.datt; i++) {

          if (this.data1.Items[i].message.S == "error") {
            this.errorCountForDate[this.i3] = this.data1.Items[i].eventclk.S
            this.i3 += 1;
          }

          else {
            this.eventCountForDate[this.i0] = this.data1.Items[i].eventclk.S
            this.i0 += 1;
          }


        }
        this.eventCountForDate.sort();
        this.errorCountForDate.sort();


        var count = 1;
        var parse_for_chart = this.yymm + this.dd + 'T00:00:00Z';

        for (var i = 0; i < this.datt; i++) {
          if ((this.eventCountForDate[i] == this.eventCountForDate[i + 1])) {
            count += 1;
          }
          else {
            parse_for_chart = this.yymm + this.dd + 'T' + this.eventCountForDate[i] + 'Z';
            this.dat = Date.parse(parse_for_chart);
            this.chart.addPoint([this.dat, count], 0);  /*************************************************** */
            count = 1;
          }

        }

        var count = 1;
        var parse_for_chart = this.yymm + this.dd + 'T00:00:00Z';

        for (var i = 0; i < this.datt; i++) {
          if ((this.errorCountForDate[i] == this.errorCountForDate[i + 1])) {
            count += 1;
          }
          else {
            parse_for_chart = this.yymm + this.dd + 'T' + this.errorCountForDate[i] + 'Z';
            this.dat = Date.parse(parse_for_chart);
            this.chart.addPoint([this.dat, count], 3);  /*************************************************** */
            count = 1;
          }

        }

      })

    this.eventCountForDate = ["12135"];
    this.errorCountForDate = ["12345"];

  }


}






  // getJsonData(eventtime : string){

  //   this._http.request('https://b06h5oh5rg.execute-api.us-east-1.amazonaws.com/project/eventTime/'+ eventtime)
  //   .subscribe((res: Response) => {
  //       this.data1 = res.json();
  //   })
  // }

// chart = new Chart({
//   chart: {
//     type: 'column',
//     marginRight: 10,
//     events: {
//         load: function () {

//             // set up the updating of the chart each second
//             var series = this.series[0];
//             setInterval(function () {
//                 var x = (new Date()).getTime(), // current time
//                     y = Math.random();

//                 series.addPoint([x, y], true, true);
//                // this.i+=1;

//             }, 1000);
//         }
//     }
// },
// title: {
//     text: 'Live random data'
// },
// xAxis: {
//     type: 'datetime',
//     tickPixelInterval: 60
// },
// yAxis: {
//     title: {
//         text: 'Value'
//     },
//     plotLines: [{
//         value: 0,
//         width: 1,
//         color: '#808080'
//     }]
// },

// legend: {
//     enabled: false
// },
// exporting: {
//     enabled: false
// },
// series: [{
//     name: 'Random data',
//     data: (function () {
//         // generate an array of random data
//         var data = [],
//             time = (new Date()).getTime(),
//             i;

//         for (i = -19; i <= 0; i += 1) {
//             data.push({
//                 x: time + i * 1000,
//                 y: Math.random()
//             });
//         }
//         return data;
//     }())
// }]
//   });



