import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Programme } from 'src/app/shared/models/programme.model';
import { DefaultStoreDataNames, Store } from 'src/app/shared/store/store';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.store.set(DefaultStoreDataNames.NAVBAR_TITLE, "Workout Manager");
  }

  handleClickItem(item: string): void{
    this.router.navigate([`/${item}`])
  }
}
