import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MuscleFormDialogComponent } from '../muscle-form-dialog/muscle-form-dialog.component';
import { Observable } from 'rxjs';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgrammeService } from 'src/app/shared/services/programme.service';
import { Programme } from 'src/app/shared/models/programme.model';

@Component({
  selector: 'app-workouts-grid',
  templateUrl: './workouts-grid.component.html',
  styleUrls: ['./workouts-grid.component.scss']
})
export class WorkoutsGridComponent implements OnInit {

  programme: Programme;

  constructor(
    private programmeService: ProgrammeService,
    private store: Store, 
    public dialog: MatDialog, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.programmeService.getProgramme(params['programmeId']).subscribe(p => {
        this.programme = p;
        this.store.set(DefaultStoreDataNames.NAVBAR_TITLE, this.programme.name);
      });
    });
  }

  openAddMuscleDialog(): void{
    this.dialog.open(MuscleFormDialogComponent);
  }
}
