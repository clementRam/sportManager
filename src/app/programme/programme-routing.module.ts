import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { ProgrammeComponent } from './components/programme/programme.component';
import { WorkoutMusclesCardComponent } from './components/workout-muscles-card/workout-muscles-card.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { ExerciseComponent } from './components/exercise/exercise.component';

const routes: Routes = [
  {
    path: '',
    component: ProgrammesComponent
  },
  { 
    path: ':programmeId', 
    component: ProgrammeComponent
   },
  { 
    path: 'programmes/:programmeId/workouts/:workoutId/muscles-card', 
    component: WorkoutMusclesCardComponent
   },
  { 
    path: 'programmes/:programmeId/workouts/:workoutId', 
    component: WorkoutComponent
   },
  { 
    path: 'programmes/:programmeId/workouts/:workoutId/exercises/:exerciseId', 
    component: ExerciseComponent
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