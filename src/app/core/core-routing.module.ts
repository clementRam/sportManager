import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './component/user-login/user-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },
  { 
    path: 'sign-in',
    component: UserLoginComponent
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class CoreRoutingModule {}