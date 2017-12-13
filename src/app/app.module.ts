import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { ChartsModule } from 'ng2-charts';
import {Ng2GoogleChartModule} from 'ng2-googlechart';
import { ChartModule } from 'angular-highcharts';
//import {DataTableModule} from "angular2-datatable";
//import { DataTableModule } from 'angular-4-data-table/src/index';
import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SetupComponent } from './setup/setup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
// import { UserComponent } from './user/user.component';
// import { TablesComponent } from './tables/tables.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
// // import { UpgradeComponent } from './upgrade/upgrade.component';
// import { NotificationsComponent } from './notifications/notifications.component';
import { TimeLineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupComponent,
    ChartsComponent,
    DashboardComponent,
  //   UserComponent,
  //   TablesComponent,
  //   TypographyComponent,
  //   IconsComponent,
  //   MapsComponent,
  //   // UpgradeComponent,
  //  NotificationsComponent,
    TimeLineComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
    HttpModule,
    Ng2GoogleChartModule,
    ChartsModule,
    ChartModule,
    DataTablesModule
   // DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
