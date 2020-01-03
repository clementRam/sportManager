import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/shared/services/workout.service';
import { Workout } from 'src/app/shared/models/workout.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { WorkoutDialogComponent } from '../workout-dialog/workout-dialog.component';
import { MuscleFormDialogComponent } from '../muscle-form-dialog/muscle-form-dialog.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  workouts$: Observable<Workout[]>;

  constructor(private workoutService: WorkoutService, public dialog: MatDialog) { }

  ngOnInit() {
    this.workouts$ = this.workoutService.getWorkouts();
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

  public openDialogEditWorkout(workout?: Workout): void{
    this.dialog.open(WorkoutDialogComponent, {
      data: {
        workout: workout
      }
    });
  }

  public deleteWorkout(workout: Workout): void{
    this.workoutService.deleteWorkout(workout.id);
  }
}
