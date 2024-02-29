import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { InternetPlan } from '../interfaces/internet-plan.interface';

@Injectable()
export class InternetPlanesService {
  getInternetPlanes(): Observable<InternetPlan[]> {
    return of([]);
  }

  getPlanById(): Observable<InternetPlan> {
    return of({} as InternetPlan);
  }
}
