import { Routes } from '@angular/router';
import { NgrxInputComponent } from './components/ngrx-input/ngrx-input.component';

export const routes: Routes = [
  {
    path: 'ngrx-example',
    loadComponent: () =>
      import('./components/ngrx-input/ngrx-input.component').then(
        (c) => c.NgrxInputComponent
      ),
  },
  {
    path: 'rxjs-subject',
    loadComponent: () =>
      import('./components/rxjs-input/rxjs-input.component').then(
        (c) => c.RxjsInputComponent
      ),
  },
  { path: '', redirectTo: 'ngrx-example', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: 'ngrx-example' }, // Wildcard route for a 404 page
];
