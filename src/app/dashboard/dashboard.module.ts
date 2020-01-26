import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProgrammeComponent } from './component/programme/programme.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, ProgrammeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
