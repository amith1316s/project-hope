import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

class LogData {
  date : string;
  time: string;
  host: string;
  messageType :string;
  message : string;
}

@Component({
  selector: 'app-charts',
  templateUrl:'./charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  logDatas: LogData[] = [];
  // We use this trigger because fetching the list of LogDatas can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get('https://b06h5oh5rg.execute-api.us-east-1.amazonaws.com/project/eventTime/2017-11-18')
      .map(this.extractData)
      .subscribe(logDatas => {
        this.logDatas = logDatas;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.Items || {};
  }
}