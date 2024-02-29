import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('./features/internet-planes/internet-planes.module').then(
        m => m.InternetPlanesModule
      ),
  },
  {
    path: '**',
    redirectTo: 'list',
  },
]
