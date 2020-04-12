import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticateGuardGuard } from './core/guard/is-authenticate-guard.guard';

const routes: Routes = [
  {
    path: 'programmes',
    loadChildren: () => import('./programme/programme.module').then(m => m.ProgrammeModule),
    canActivate: [IsAuthenticateGuardGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [IsAuthenticateGuardGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
