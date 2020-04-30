import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { WorkoutService } from 'src/app/shared/services/workout.service';
import { Workout } from 'src/app/shared/models/workout.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout-form-dialog',
  templateUrl: './workout-form-dialog.component.html',
  styleUrls: ['./workout-form-dialog.component.scss']
})
export class WorkoutFormDialogComponent implements OnInit {

  newWorkoutForm = this.fb.group({
    name: ['', Validators.required]
  });
  workoutExistedForm = this.fb.group({
    workout: [null, Validators.required]
  });
  workouts$: Observable<Workout[]>;
  workout: Workout;
  
  constructor(
    public dialogRef: MatDialogRef<WorkoutFormDialogComponent>,
    private fb: FormBuilder, 
    private workoutService: WorkoutService,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) { }

  ngOnInit() {
    this.workouts$ = this.workoutService.getWorkouts();
    if(this.workout){
      this.newWorkoutForm.setValue(this.workout);
    }
    this.newWorkoutForm.get('name').valueChanges.subscribe(value => {
      if(value){
        this.workoutExistedForm.get('workout').disable({emitEvent:false});
      } else {
        this.workoutExistedForm.get('workout').enable({emitEvent:false});
      }
    });
    this.workoutExistedForm.get('workout').valueChanges.subscribe(value => {
      if(value){
        this.newWorkoutForm.get('name').disable({emitEvent:false});
      } else {
        this.newWorkoutForm.get('name').enable({emitEvent:false});
      }
    })

  }

  onCancel(): void{
    this.dialogRef.close();
  }

  onSubmit(): void{
    if(this.newWorkoutForm.valid){
      if(this.workout){
        this.workoutService.updateWorkout({...this.workout, ...this.newWorkoutForm.value})
        .subscribe(() => this.dialogRef.close());
      } else {
        if(this.newWorkoutForm.value)
        this.workoutService.addWorkout(this.newWorkoutForm.value).subscribe(workout => this.dialogRef.close(workout));
      }
    }
    if(this.workoutExistedForm.valid){
      this.dialogRef.close(this.workoutExistedForm.get('workout').value);
    }
  }

}
