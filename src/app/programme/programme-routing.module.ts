import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { ProgrammeComponent } from './components/programme/programme.component';

const routes: Routes = [
  {
    path: '',
    component: ProgrammesComponent
  },
  { 
    path: ':programmeId', 
    component: ProgrammeComponent
   },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class ProgrammeRoutingModule {}