import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from 'src/app/shared/services/workout.service';
import { Workout } from 'src/app/shared/models/workout.model';
import { Exercise } from 'src/app/shared/models/exercise.model';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseFormDialogComponent } from '../exercise-form-dialog/exercise-form-dialog.component';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  workout: Workout;
  routePrams: Object;

  constructor(
    private route: ActivatedRoute, 
    private workoutService: WorkoutService, 
    private router: Router, 
    private dialog: MatDialog,
    private store: Store) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.routePrams = params;
      this.workoutService.getWorkout(parseInt(params['workoutId'])).subscribe(workout => {
        this.workout = workout;
        if(this.workout){
          this.store.set(DefaultStoreDataNames.NAVBAR_TITLE, this.workout.name);
        }
    });
  })
  }

  handleClickExercise(exercise: Exercise): void {
    this.router.navigate([`/programmes/${this.routePrams['programmeId']}/workouts/${this.workout.id}/exercises/${exercise.id}`])
  }

  handleClickAddExercise(): void{
    this.dialog.open(ExerciseFormDialogComponent).afterClosed().subscribe(exercise => {
      if(exercise){
        let workoutUpdated = Object.assign({}, this.workout);
        workoutUpdated.exercises = [...workoutUpdated.exercises, exercise];
        this.workoutService.updateWorkout(workoutUpdated).subscribe(workout => this.workout = workout);
      }
    });
  }

}
