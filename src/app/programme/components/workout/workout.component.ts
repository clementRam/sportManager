import { Component, OnInit, Input } from '@angular/core';
import { Workout } from 'src/app/shared/models/workout.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { WorkoutService } from 'src/app/shared/services/workout.service';
import { MatDialog } from '@angular/material/dialog';
import { MuscleFormDialogComponent } from '../muscle-form-dialog/muscle-form-dialog.component';
import { WorkoutDialogComponent } from '../workout-dialog/workout-dialog.component';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  @Input('workout')
  workout: Workout;

  constructor(private workoutService: WorkoutService, public dialog: MatDialog) { }

  ngOnInit() {
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
    const dialogRef = this.dialog.open(WorkoutDialogComponent, {
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
