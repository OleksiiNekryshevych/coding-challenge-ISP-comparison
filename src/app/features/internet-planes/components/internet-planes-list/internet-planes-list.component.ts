import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntil } from 'rxjs';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { SortingService } from '../../services/sorting.service';
import { ListPageComponent } from '../../../../shared/components';
import { InternetPlan } from '../../interfaces/internet-plan.interface';
import { InternetPlanComponent } from '../internet-plan/internet-plan.component';
import { InternetPlanSortingComponent } from '../internet-plan-sorting/internet-plan-sorting.component';
import { SortingOrder } from '../../../../shared/enums/sorting-order.enum';
import { InternetPlanesSortingType } from '../../enums/internet-planes-sorting-type.enum';
import { defaultPlanesPaginationConfig } from '../../configs/default-pagination.config';
import { ApiInternetPlanesService } from '../../services/api-internet-planes.service';

@Component({
  selector: 'app-internet-planes-list',
  standalone: true,
  imports: [
    CommonModule,
    InternetPlanComponent,
    InternetPlanSortingComponent,
    NzSpinModule,
  ],
  templateUrl: './internet-planes-list.component.html',
  styleUrl: './internet-planes-list.component.scss',
})
export class InternetPlanesListComponent
  extends ListPageComponent<InternetPlan, InternetPlanesSortingType>
  implements OnInit
{
  private sortingService = inject(SortingService);
  private apiInternetPlanesService = inject(ApiInternetPlanesService);

  public override ngOnInit(): void {
    super.ngOnInit();

    this.paginationParams = defaultPlanesPaginationConfig;
    this.listenSorting();
  }

  protected override load(): void {
    this.isLoading = true;
    this.apiInternetPlanesService
      .getInternetPlanes(this.paginationParams || defaultPlanesPaginationConfig)
      .pipe(takeUntil(this.destroy$))
      .subscribe((planes: InternetPlan[]) => {
        this.listItems = planes;
        this.isLoading = false;
      });
    //TODO: cover errors and loading state onError;
  }

  private listenSorting(): void {
    this.sortingService
      .getSortingState()
      .pipe(takeUntil(this.destroy$))
      .subscribe((sortingParams: [InternetPlanesSortingType, SortingOrder]) => {
        this.updatePaginationParams(sortingParams);
        this.load();
      });
  }

  // we have to update pagination parameters before we make request
  // new updated parameters will be included to req
  private updatePaginationParams([sortingType, sortingOrder]: [
    InternetPlanesSortingType,
    SortingOrder,
  ]): void {
    this.paginationParams = {
      ...this.paginationParams,
      order: sortingOrder,
      sort: sortingType,
    };
  }
}
