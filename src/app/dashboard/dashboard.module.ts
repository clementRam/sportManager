import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuscleComponent } from './components/muscle/muscle.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { WorkoutDialogComponent } from './components/workout-dialog/workout-dialog.component';

@NgModule({
  declarations: [MuscleComponent, WorkoutsComponent, WorkoutDialogComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    DragDropModule,
    MatCardModule,
    SharedModule
  ],
  entryComponents: [
    WorkoutDialogComponent
  ]
})
export class DashboardModule { }
