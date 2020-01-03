import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Workout } from 'src/app/shared/models/workout.model';
import { Muscle } from 'src/app/shared/models/muscle.model';
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
    name: ['', Validators.required],
    workout: ['', Validators.required]
  });
  workouts$: Observable<Workout[]>;
  muscles$: Observable<Muscle[]>;

  constructor(
    public dialogRef: MatDialogRef<MuscleFormDialogComponent>, 
    private fb: FormBuilder,
    private store: Store,
    private muscleService: MuscleService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.workouts$ = this.store.select<Workout[]>(DefaultStoreDataNames.WORKOUTS);
    this.muscles$ = this.muscleService.getMuscles();
  }

  onSubmit(){
    if(this.muscleForm.valid){

    }
  }
}
