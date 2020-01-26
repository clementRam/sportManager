import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from 'src/app/shared/services/programme.service';
import { Observable } from 'rxjs';
import { Programme } from 'src/app/shared/models/programme.model';
import { DefaultStoreDataNames, Store } from 'src/app/shared/store/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  programmes$: Observable<Programme[]>;

  constructor(private programmeService: ProgrammeService, private store: Store) { }

  ngOnInit() {
    this.programmes$ = this.programmeService.getProgrammes();
    this.store.set(DefaultStoreDataNames.NAVBAR_TITLE, "Workout Manager");
  }

}
