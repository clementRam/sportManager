import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { WorkoutService } from 'src/app/shared/services/workout.service';
import { Workout } from 'src/app/shared/models/workout';

@Component({
  selector: 'app-workout-dialog',
  templateUrl: './workout-dialog.component.html',
  styleUrls: ['./workout-dialog.component.scss']
})
export class WorkoutDialogComponent implements OnInit {

  workoutForm = this.fb.group({
    name: ['', Validators.required]
  })

  workout: Workout;

  constructor(
    public dialogRef: MatDialogRef<WorkoutDialogComponent>, 
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    @Inject(MAT_DIALOG_DATA) public data: any 
    ){}

  ngOnInit() {
    if(this.data.workout) {
      this.workout = this.data.workout;
      this.workoutForm.patchValue(this.workout);
    }
  }

  public onSubmit(): void {
    if(this.workoutForm.valid){
      if(this.workout) {
        const workoutUpdated = {...this.workout, ...this.workoutForm.value};
        this.workoutService.updateWorkout(workoutUpdated).then(() => this.dialogRef.close());
      } else {
        this.workoutService.addWorkout(this.workoutForm.value).then(() => this.dialogRef.close());
      }
    } else {
      this.workoutForm.markAllAsTouched();
    }
  }

  private 

}
