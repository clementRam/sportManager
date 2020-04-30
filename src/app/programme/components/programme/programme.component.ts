import { Component, OnInit } from '@angular/core';
import { Programme } from 'src/app/shared/models/programme.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgrammeService } from 'src/app/shared/services/programme.service';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';
import { Workout } from 'src/app/shared/models/workout.model';
import { MatDialog } from '@angular/material/dialog';
import { WorkoutFormDialogComponent } from '../workout-form-dialog/workout-form-dialog.component';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {

  programme: Programme;

  constructor(
    private route: ActivatedRoute, 
    private programmeService: ProgrammeService, 
    private store: Store,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.programmeService.getProgramme(parseInt(params['programmeId'])).subscribe(p => {
        this.programme = p;
        this.store.set(DefaultStoreDataNames.NAVBAR_TITLE, this.programme.name);
      });
    });
  }

  handleClickWorkout(workout: Workout): void {
    this.router.navigate([`/programmes/${this.programme.id}/workouts/${workout.id}`])
  }

  handleClickAddWorkout(): void{
    this.dialog.open(WorkoutFormDialogComponent, {
      width: '400px'
    }).afterClosed().subscribe(workout => {
      if(workout){
        let programmeUpdated = Object.assign({}, this.programme);
        programmeUpdated.workouts = [...programmeUpdated.workouts ? programmeUpdated.workouts : [], workout];
        this.programmeService.updateProgramme(programmeUpdated).subscribe(programme => this.programme = programme)
      }
    });
  }

}
