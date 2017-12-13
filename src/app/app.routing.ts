import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'user',           component: UserComponent },
  // { path: 'table',          component: TablesComponent },
  // { path: 'typography',     component: TypographyComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent },
  // // { path: 'upgrade',        component: UpgradeComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  { path: 'timeline', component: TimeLineComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
