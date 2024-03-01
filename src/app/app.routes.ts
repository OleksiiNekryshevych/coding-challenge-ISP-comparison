import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    // lazy loaded module with internet planes
    loadChildren: () =>
      import('./features/internet-planes/internet-planes.module').then(
        m => m.InternetPlanesModule
      ),
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];
