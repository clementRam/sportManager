import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Workout } from 'src/app/shared/models/workout.model';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';
import { Observable } from 'rxjs';
import { MuscleService } from 'src/app/shared/services/muscle.service';

@Component({
  selector: 'app-muscle-form-dialog',
  templateUrl: './muscle-form-dialog.component.html',
  styleUrls: ['./muscle-form-dialog.component.scss']
})
export class MuscleFormDialogComponent implements OnInit {

  muscleForm = this.fb.group({
    name: ['', Validators.required]
  });
  workouts$: Observable<Workout[]>;

  constructor(
    public dialogRef: MatDialogRef<MuscleFormDialogComponent>, 
    private fb: FormBuilder,
    private store: Store,
    private muscleService: MuscleService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.workouts$ = this.store.select<Workout[]>(DefaultStoreDataNames.WORKOUTS);
  }

  onSubmit(){
    if(this.muscleForm.valid){
      this.muscleService.createMuscle(this.muscleForm.value).subscribe(() => this.muscleService.getMuscles());
    } else {
      this.muscleForm.markAllAsTouched();
    }
  }
}
