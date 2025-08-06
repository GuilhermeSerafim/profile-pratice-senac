import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' },
];
