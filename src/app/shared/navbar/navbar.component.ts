import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { AppComponent } from 'app/app.component';

@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    today1: number = Date.now();
    today = new Date(this.today1);
    datee = new Date();
     
    

    constructor(location: Location,  private element: ElementRef, public appcom : AppComponent) {
        this.datee = appcom.datee;
      this.location = location;
          this.sidebarVisible = false;
          
        setInterval(() => {
            this.today = new Date();
          }, 1);

        
    }

    ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }
    // sidebarOpen() {
    //     const toggleButton = this.toggleButton;
    //     const body = document.getElementsByTagName('body')[0];
    //     setTimeout(function(){
    //         toggleButton.classList.add('toggled');
    //     }, 500);
    //     body.classList.add('nav-open');

    //     this.sidebarVisible = true;
    // };
    // sidebarClose() {
    //     const body = document.getElementsByTagName('body')[0];
    //     this.toggleButton.classList.remove('toggled');
    //     this.sidebarVisible = false;
    //     body.classList.remove('nav-open');
    // };
    // sidebarToggle() {
    //     // const toggleButton = this.toggleButton;
    //     // const body = document.getElementsByTagName('body')[0];
    //     if (this.sidebarVisible === false) {
    //         this.sidebarOpen();
    //     } else {
    //         this.sidebarClose();
    //     }
    // };

    getTitle(){
        this.datee = this.appcom.datee;
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.split('/').pop();
      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }
}
