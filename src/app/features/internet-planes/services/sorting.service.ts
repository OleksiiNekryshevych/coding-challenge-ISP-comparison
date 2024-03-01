import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';

import { SortingOrder } from '../../../shared/enums/sorting-order.enum';
import { InternetPlanesSortingType } from '../enums/internet-planes-sorting-type.enum';

@Injectable()
export class SortingService {
  private readonly InternetPlanesSortingType$: BehaviorSubject<InternetPlanesSortingType> =
    new BehaviorSubject<InternetPlanesSortingType>(
      InternetPlanesSortingType.PRICE
    );
  private readonly SortingOrder$: BehaviorSubject<SortingOrder> =
    new BehaviorSubject<SortingOrder>(SortingOrder.ASCENDING);

  updateSortingOrder(SortingOrder: SortingOrder): void {
    this.SortingOrder$.next(SortingOrder);
  }

  updateInternetPlanesSortingType(
    InternetPlanesSortingType: InternetPlanesSortingType
  ): void {
    this.InternetPlanesSortingType$.next(InternetPlanesSortingType);
  }

  getSortingState(): Observable<[InternetPlanesSortingType, SortingOrder]> {
    return combineLatest([
      this.InternetPlanesSortingType$.asObservable(),
      this.SortingOrder$.asObservable(),
    ]);
  }
}
