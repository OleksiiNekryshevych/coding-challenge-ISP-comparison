import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InternetPlan } from '../interfaces/internet-plan.interface';
import { InternetPlanesPaginationParams } from '../interfaces/pagination-params.interface';

@Injectable()
export class ApiInternetPlanesService {
  getInternetPlanes(
    paginationParams: InternetPlanesPaginationParams
  ): Observable<InternetPlan[]> {
    console.log(paginationParams);
    return of([]);
  }
}
