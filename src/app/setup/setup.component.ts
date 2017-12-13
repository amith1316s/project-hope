import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'app/app.component';


@Component({
  selector: 'app-form',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  today: number = Date.now();
  reqDate = new Date(this.today);
  constructor(public appcom : AppComponent) { }

  saveChanges(){
   this.appcom.datee = this.reqDate;
   alert('Save changes');
  }

  ngOnInit() {
  }

}
