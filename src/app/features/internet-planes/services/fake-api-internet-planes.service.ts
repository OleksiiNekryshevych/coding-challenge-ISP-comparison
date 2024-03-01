import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { internetPlanesMock } from '../mock/internet-planes.mock';

import { ApiInternetPlanesService } from './api-internet-planes.service';
import { InternetPlan } from '../interfaces/internet-plan.interface';
import { InternetPlanesPaginationParams } from '../interfaces/pagination-params.interface';
import { InternetPlanesSortingType } from '../enums/internet-planes-sorting-type.enum';
import { sortBySpeed } from '../utils/sorting/sort-by-speed.helper';
import { sortByPrice } from '../utils/sorting/sort-by-price.helper';

@Injectable()
export class FakeApiInternetPlanesService implements ApiInternetPlanesService {
  getInternetPlanes(
    paginationParams: InternetPlanesPaginationParams
  ): Observable<InternetPlan[]> {
    // In the real world, we would send a request to the server with correct pagination data.
    // This pagination data should include comprehensive information about sorting and filtering.
    // I've added a small delay to simulate the real HTTP request delay.
    return this.getDataByParams(paginationParams).pipe(delay(1000));
  }

  // This method replaces backend logic for filtering and sorting. It doesn't make sense to implement this logic on the client side
  // because we lack information about records that haven't been loaded to the client.
  // For example, if we've loaded 100 records out of 1000 and need records with the lowest price, we should send a request to the backend to return sorted data.
  // However, for the challenge perspective, I've implemented this logic on the client.
  private getDataByParams(
    paginationParams: InternetPlanesPaginationParams
  ): Observable<InternetPlan[]> {
    let sortedPlanes: InternetPlan[] = [];

    switch (paginationParams.sort) {
      case InternetPlanesSortingType.DOWNLOAD_SPEED:
      case InternetPlanesSortingType.UPLOAD_SPEED:
        sortedPlanes = internetPlanesMock.sort((a, b) =>
          sortBySpeed(
            a,
            b,
            paginationParams.order,
            paginationParams.sort as
              | InternetPlanesSortingType.DOWNLOAD_SPEED
              | InternetPlanesSortingType.UPLOAD_SPEED
          )
        );
        break;
      case InternetPlanesSortingType.PRICE:
      default:
        sortedPlanes = internetPlanesMock.sort((a, b) =>
          sortByPrice(a, b, paginationParams.order)
        );
        break;
    }

    return of(sortedPlanes);
  }
}
