import { Component, OnInit } from '@angular/core';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';
import { Observable } from 'rxjs';
import { Programme } from 'src/app/shared/models/programme.model';
import { ProgrammeService } from 'src/app/shared/services/programme.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProgrammeDialogComponent } from '../programme-dialog/programme-dialog.component';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.scss']
})
export class ProgrammesComponent implements OnInit {

  programmes$: Observable<Programme[]>;

  constructor(private store: Store, private programmeService: ProgrammeService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.initProgrammes();
    this.store.set(DefaultStoreDataNames.NAVBAR_TITLE, "Programmes");
  }

  initProgrammes(): void{
    this.programmes$ = this.programmeService.getProgrammes();
  }

  handleClickProgramme(programme: Programme): void{
    this.router.navigate([`programmes/${programme.id}`])
  }

  handleClickAddProgramme(): void{
    this.dialog.open(ProgrammeDialogComponent,
      {
        width: '400px'
      }
    ).afterClosed().subscribe(() => this.initProgrammes());
  }

}
