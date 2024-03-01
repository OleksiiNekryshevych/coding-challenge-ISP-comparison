import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternetPlanesListComponent } from './components/internet-planes-list/internet-planes-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InternetPlanesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetPlanesRoutingModule {}
