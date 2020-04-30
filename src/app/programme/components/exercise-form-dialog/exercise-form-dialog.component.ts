import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from 'src/app/shared/store/store';
import { ExerciseService } from 'src/app/shared/services/exercise.service';
import { Exercise } from 'src/app/shared/models/exercise.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-form-dialog',
  templateUrl: './exercise-form-dialog.component.html',
  styleUrls: ['./exercise-form-dialog.component.scss']
})
export class ExerciseFormDialogComponent implements OnInit {

  exerciseExistedForm = this.fb.group({
    exercise: [null, Validators.required]
  });

  newExerciseForm = this.fb.group({
    name: ['', Validators.required]
  });

  exercises$: Observable<Exercise[]>;
  exercise: Exercise;

  constructor(
    public dialogRef: MatDialogRef<ExerciseFormDialogComponent>, 
    private fb: FormBuilder,
    private exerciseService: ExerciseService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.exercises$ = this.exerciseService.getExercises();
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(){
    if(this.newExerciseForm.valid){
      if(this.exercise){
        this.exerciseService.updateExercise({...this.exercise, ...this.newExerciseForm.value})
        .subscribe(exercise => this.dialogRef.close(exercise));;
      } else {
        this.exerciseService.createExercise(this.newExerciseForm.value)
        .subscribe(exercise => this.dialogRef.close(exercise));
      }
    }
    if(this.exerciseExistedForm.valid){
      this.dialogRef.close(this.exerciseExistedForm.value);
    }
  }
}
