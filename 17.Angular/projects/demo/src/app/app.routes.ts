import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { FilmsComponent } from './feature/films/films.component';
import { AboutComponent } from './feature/about/about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home' },
];
