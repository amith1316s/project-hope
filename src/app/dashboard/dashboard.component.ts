import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { AppComponent } from 'app/app.component';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datee = new Date();

  public tableData1: TableData

  private variousEvents = ["12135"];
  private errorEvents = ["12345"];

  private currentDate: any;
  private dataid: any;
  private date: any;
  private message: any;
  private status: any;
  // public dat : number = 50;
  //public val : string = "10";
  public yymm = "2017-11-";
  public dd = "18";
  public eventtime: string = this.yymm + this.dd;
  public index: string;
  public data1: any;
  public data2: any;
  // docs : any[];
  // count : any = "5";
  public dd1: number;
  public dd2: number;
  public dat: any;
  public datt: any;
  public i0 = 0;
  public i1 = 0;
  public i2 = 0;
  public i3 = 0;
  public tableData = ['event type','count'];

  constructor(private _http: Http, appcom : AppComponent) {
    this.datee = appcom.datee;
    this.getData();
  }

  ngOnInit() {
  }




  chart1 = new Chart({
    chart: {
      type: 'pie',
    },
    title: {
      text: 'grouped by message type'
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150
    },
    yAxis: {
      title: {
        text: 'Value'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: [{

    }]
  });

  chart2 = new Chart({
    chart: {
      type: 'scatter',
      zoomType: 'x',
    },
    title: {
      text: 'errors'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Value'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: [{
    }],
  });


  getData() {
    this._http.request('https://b06h5oh5rg.execute-api.us-east-1.amazonaws.com/project/eventTime/' + this.datee)
      .subscribe((res: Response) => {
        this.data1 = res.json();
        this.datt = this.data1.Count;

        for (var i = 0; i < this.datt; i++) {
          this.variousEvents[i] = this.data1.Items[i].messageType.S
          if (this.data1.Items[i].message.S == "error") {
            this.errorEvents[i] = this.data1.Items[i].eventclk.S
          }
        }
        this.variousEvents.sort();
        this.errorEvents.sort();

        this.tableData[0] = 'dfd';
        this.tableData[1] = 'dfdkugug';
        var count = 1;

        for (var i = 0; i < this.datt; i++) {
          if ((this.variousEvents[i] == this.variousEvents[i + 1])) {
            count += 1;
          }
          else {

           // this.tableData = [this.variousEvents[i], count.toString()];
           

            this.chart1.addPoint({
              name: this.variousEvents[i],
              y: count
            });
            count = 1;
          }

        }

        var count = 1;
        var parse_for_chart = this.yymm + this.dd + 'T00:00:00Z';
        this.dat = Date.parse(parse_for_chart);
        this.chart2.addPoint([this.dat, 0]);

        for (var i = 0; i < this.datt; i++) {
          if ((this.errorEvents[i] == this.errorEvents[i + 1])) {
            count += 1;
          }
          else {
            parse_for_chart = this.yymm + this.dd + 'T' + this.errorEvents[i] + 'Z';
            this.dat = Date.parse(parse_for_chart);
            this.chart2.addPoint([this.dat, count]);  /*************************************************** */
            count = 1;
          }

        }
        var parse_for_chart = this.yymm + this.dd + 'T24:00:00Z';
        this.dat = Date.parse(parse_for_chart);
        this.chart2.addPoint([this.dat, 0]);
      })

    this.variousEvents = ["12135"];

    this.tableData1 = {
      headerRow: [ 'Event Type', 'Count' ],
      dataRows: [
          this.tableData,
      ]
    };
  }
}




