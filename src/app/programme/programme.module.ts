import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuscleComponent } from './components/muscle/muscle.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { MuscleFormDialogComponent } from './components/muscle-form-dialog/muscle-form-dialog.component';
import { ProgrammeRoutingModule } from './programme-routing.module';
import { ProgrammeCardComponent } from './components/programme-card/programme-card.component';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { ProgrammeDialogComponent } from './components/programme-dialog/programme-dialog.component';
import { ProgrammeComponent } from './components/programme/programme.component';
import { WorkoutFormDialogComponent } from './components/workout-form-dialog/workout-form-dialog.component';
import { WorkoutMusclesCardComponent } from './components/workout-muscles-card/workout-muscles-card.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { WorkoutsGridComponent } from './components/workouts-grid/workouts-grid.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { ExerciseFormDialogComponent } from './components/exercise-form-dialog/exercise-form-dialog.component';
import { ExerciseComponent } from './components/exercise/exercise.component';

@NgModule({
  declarations: [
    MuscleComponent, 
    WorkoutsGridComponent, 
    MuscleFormDialogComponent,
    WorkoutMusclesCardComponent,
    ProgrammeCardComponent,
    ProgrammesComponent,
    ProgrammeDialogComponent,
    ProgrammeComponent,
    WorkoutFormDialogComponent,
    WorkoutComponent,
    WorkoutsComponent,
    ExerciseFormDialogComponent,
    ExerciseComponent
  ],
  imports: [
    ProgrammeRoutingModule,
    CommonModule,
    DragDropModule,
    MatCardModule,
    SharedModule
  ],
  entryComponents: [
    MuscleFormDialogComponent,
    ProgrammeDialogComponent,
    ExerciseFormDialogComponent,
    WorkoutFormDialogComponent,
  ]
})
export class ProgrammeModule { }
