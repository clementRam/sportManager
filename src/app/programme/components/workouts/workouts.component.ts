import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkoutDialogComponent } from '../workout-dialog/workout-dialog.component';
import { MuscleFormDialogComponent } from '../muscle-form-dialog/muscle-form-dialog.component';
import { Observable } from 'rxjs';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgrammeService } from 'src/app/shared/services/programme.service';
import { Programme } from 'src/app/shared/models/programme.model';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

  programme$: Observable<Programme>;

  constructor(
    private programmeService: ProgrammeService,
    private store: Store, 
    public dialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.set(DefaultStoreDataNames.NAVBAR_TITLE, "Programme");
    this.route.params.subscribe(params => {
      this.programme$ = this.programmeService.getProgramme(params['programmeId']);
    });
  }

  openAddMuscleDialog(): void{
    this.dialog.open(MuscleFormDialogComponent);
  }

  openDialogCreateWorkout(): void{
    this.dialog.open(WorkoutDialogComponent);
  }
}
