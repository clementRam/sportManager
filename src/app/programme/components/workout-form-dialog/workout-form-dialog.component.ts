import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { WorkoutService } from 'src/app/shared/services/workout.service';
import { Workout } from 'src/app/shared/models/workout.model';

@Component({
  selector: 'app-workout-form-dialog',
  templateUrl: './workout-form-dialog.component.html',
  styleUrls: ['./workout-form-dialog.component.scss']
})
export class WorkoutFormDialogComponent implements OnInit {

  workoutForm = this.fb.group({
    name: ['', Validators.required]
  })

  workout: Workout;
  
  constructor(
    public dialogRef: MatDialogRef<WorkoutFormDialogComponent>,
    private fb: FormBuilder, 
    private workoutService: WorkoutService,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) { }

  ngOnInit() {
    if(this.workout){
      this.workoutForm.setValue(this.workout);
    }
  }

  onCancel(): void{
    this.dialogRef.close();
  }

  onSubmit(): void{
    if(this.workoutForm.valid){
      if(this.workout){
        this.workoutService.updateWorkout({...this.workout, ...this.workoutForm.value})
        .subscribe(() => this.dialogRef.close());
      } else {
        this.workoutService.addWorkout(this.workoutForm.value).subscribe(workout => this.dialogRef.close(workout));
      }
    }
  }

}
