import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [UserLoginComponent, NavbarComponent],
  imports: [
    CoreRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
