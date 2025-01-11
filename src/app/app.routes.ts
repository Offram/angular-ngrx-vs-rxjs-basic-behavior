import { Routes } from '@angular/router';
import { NameInputComponent } from './components/name-input/name-input.component';

export const routes: Routes = [
  {
    path: 'ngrx-example',
    loadComponent: () =>
      import('./components/name-input/name-input.component').then(
        (c) => c.NameInputComponent
      ),
  },
  {
    path: 'rxjs-subject',
    loadComponent: () =>
      import('./components/name-input/name-input.component').then(
        (c) => c.NameInputComponent
      ),
  },
  { path: '', redirectTo: 'ngrx-example', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: 'ngrx-example' }, // Wildcard route for a 404 page
];
