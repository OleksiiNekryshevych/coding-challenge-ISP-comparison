import { NgModule } from '@angular/core';

import { InternetPlanesRoutingModule } from './internet-planes-routing.module';
import { ApiInternetPlanesService } from './services/api-internet-planes.service';
import { FakeApiInternetPlanesService } from './services/fake-api-internet-planes.service';
import { SortingService } from './services/sorting.service';

@NgModule({
  imports: [InternetPlanesRoutingModule],
  providers: [
    SortingService,
    // temporary replace service before implementation of real ApiInternetPlanesService
    {
      provide: ApiInternetPlanesService,
      useClass: FakeApiInternetPlanesService,
    },
  ],
})
export class InternetPlanesModule {}
