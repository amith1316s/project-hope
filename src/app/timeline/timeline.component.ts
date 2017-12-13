import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import {Http, Response, Headers, RequestOptions} from "@angular/http";



@Component({
  selector: 'app-timeline',
  //templateUrl:'./timeline.component.html',
  template : `<button (click)="add()">Add Point!</button>
  <div [chart]="chart"></div>`,
  styleUrls: ['./timeline.component.css']
})
export class TimeLineComponent implements OnInit {

  private currentDate : any;
  private dataid : any;
  private date : any;
  private message : any;
  private status : any;
 // public dat : number = 50;
  //public val : string = "10";
  public yymm = "2017-11-";
  public dd = "18";
  public eventtime : string = this.yymm + this.dd;
 public index : string;
  data1: Object;
 // docs : any[];
 // count : any = "5";
 public dd1 : number;
 public dd2 : number;
 public dat :any;
 public datt:any ;
  public i = 0;
  public k=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

  constructor(private _http: Http) {}

  ngOnInit() {
  }
  



  chart = new Chart({
  chart: {
    type: 'area',
    marginRight: 10,
    events: {
        load: function () {

            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function () {
                var x = (new Date()).getTime(), // current time
                    y = Math.random();
                series.addPoint([x, y], true, true);
            }, 1000);
        }
    }
},
title: {
    text: 'Live random data'
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

legend: {
    enabled: false
},
exporting: {
    enabled: false
},
series: [{
    name: 'Random data',
    data: (function () {
        // generate an array of random data
        var data = [],
            time = (new Date()).getTime(),
            i;

        for (i = -19; i <= 0; i += 1) {
            data.push({
                x: time + i * 1000,
                y: Math.random()
            });
        }
        return data;
    }())
}]
  });
  }
