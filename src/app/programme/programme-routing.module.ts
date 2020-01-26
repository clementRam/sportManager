import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { WorkoutsComponent } from './components/workouts/workouts.component';

const routes: Routes = [
  { 
path: ':programmeId', 
    component: WorkoutsComponent
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