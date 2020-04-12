import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuscleComponent } from './components/muscle/muscle.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { WorkoutDialogComponent } from './components/workout-dialog/workout-dialog.component';
import { MuscleFormDialogComponent } from './components/muscle-form-dialog/muscle-form-dialog.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { ProgrammeRoutingModule } from './programme-routing.module';
import { ProgrammeCardComponent } from './components/programme-card/programme-card.component';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { ProgrammeDialogComponent } from './components/programme-dialog/programme-dialog.component';
import { ProgrammeComponent } from './components/programme/programme.component';
import { WorkoutFormDialogComponent } from './components/workout-form-dialog/workout-form-dialog.component';

@NgModule({
  declarations: [
    MuscleComponent, 
    WorkoutsComponent, 
    WorkoutDialogComponent,
    MuscleFormDialogComponent,
    WorkoutComponent,
    ProgrammeCardComponent,
    ProgrammesComponent,
    ProgrammeDialogComponent,
    ProgrammeComponent,
    WorkoutFormDialogComponent
  ],
  imports: [
    ProgrammeRoutingModule,
    CommonModule,
    DragDropModule,
    MatCardModule,
    SharedModule
  ],
  entryComponents: [
    WorkoutDialogComponent,
    MuscleFormDialogComponent,
    ProgrammeDialogComponent,
    WorkoutFormDialogComponent
  ]
})
export class ProgrammeModule { }
