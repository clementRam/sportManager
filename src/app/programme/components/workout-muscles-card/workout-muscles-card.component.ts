import { Component, OnInit, Input } from '@angular/core';
import { Workout } from 'src/app/shared/models/workout.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { WorkoutService } from 'src/app/shared/services/workout.service';
import { MatDialog } from '@angular/material/dialog';
import { MuscleFormDialogComponent } from '../muscle-form-dialog/muscle-form-dialog.component';
import { WorkoutFormDialogComponent } from '../workout-form-dialog/workout-form-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-muscles-card',
  templateUrl: './workout-muscles-card.component.html',
  styleUrls: ['./workout-muscles-card.component.scss']
})
export class WorkoutMusclesCardComponent implements OnInit {

  workout: Workout;

  constructor(private workoutService: WorkoutService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.workoutService.getWorkout(params['workoutId']).subscribe(workout => this.workout = workout)
    })
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  public openAddMuscleDialog(){
    this.dialog.open(MuscleFormDialogComponent);
  }

  public openDialogEditWorkout(): void{
    const dialogRef = this.dialog.open(WorkoutFormDialogComponent, {
      data: {
        workout: this.workout
      }
    });
    dialogRef.afterClosed().subscribe(w => this.workout = w);
  }

  public deleteWorkout(): void{
    this.workoutService.deleteWorkout(this.workout.id).subscribe(() => this.workoutService.getWorkouts().subscribe());
  }

}
