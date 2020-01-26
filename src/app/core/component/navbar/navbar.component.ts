import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarTitle: string;
  canGoBack: boolean = false;

  constructor(private authService: AuthService, private store: Store, private location: Location, private router: Router) { }

  ngOnInit() {
    this.store.select<string>(DefaultStoreDataNames.NAVBAR_TITLE).subscribe(navbarTitle => this.navbarTitle = navbarTitle);
    this.router.events.subscribe(route => {
      if(route instanceof NavigationStart){
        this.canGoBack = route.url !== '/dashboard';
      }
    })    
  }

  public onClickExit(): void{
    this.authService.signOut();
  }

  clickGoBack(): void{
    this.location.back();
  }
}
