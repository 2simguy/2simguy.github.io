import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  // redirect no path to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //   redirect all other paths to home
  { path: '**', redirectTo: 'home' },
];
