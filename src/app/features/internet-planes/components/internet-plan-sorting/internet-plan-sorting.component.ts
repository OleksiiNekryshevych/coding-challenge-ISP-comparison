import { Component, OnInit, inject } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { takeUntil } from 'rxjs';

import { SortingService } from './../../services/sorting.service';
import { DestroyableDirective } from '../../../../shared/directives';
import { InternetPlanesSortingType } from '../../enums/internet-planes-sorting-type.enum';
import { SortingOrder } from '../../../../shared/enums/sorting-order.enum';

@Component({
  selector: 'app-internet-plan-sorting',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NzSelectModule],
  templateUrl: './internet-plan-sorting.component.html',
  styleUrl: './internet-plan-sorting.component.scss',
})
export class InternetPlanSortingComponent
  extends DestroyableDirective
  implements OnInit
{
  private readonly formBuilder = inject(FormBuilder);
  private readonly sortingService = inject(SortingService);

  form!: FormGroup;

  SortingOrder: typeof SortingOrder = SortingOrder;
  InternetPlanesSortingType: typeof InternetPlanesSortingType =
    InternetPlanesSortingType;

  ngOnInit(): void {
    //TODO: check route if contains query parameters to set initial sorting
    // and to have ability share page with this parameters;
    this.buildSortingForm();
    this.listenForm();
  }

  onInternetPlanesSortingTypeChanges(): void {}

  private buildSortingForm(): void {
    this.form = this.formBuilder.group({
      SortingOrder: this.formBuilder.control(this.SortingOrder.ASCENDING, []),
      InternetPlanesSortingType: this.formBuilder.control(
        InternetPlanesSortingType.PRICE,
        []
      ),
    });
  }

  private listenForm(): void {
    this.form
      .get('InternetPlanesSortingType')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((InternetPlanesSortingType: InternetPlanesSortingType) =>
        this.sortingService.updateInternetPlanesSortingType(
          InternetPlanesSortingType
        )
      );
    this.form
      .get('SortingOrder')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((SortingOrder: SortingOrder) =>
        this.sortingService.updateSortingOrder(SortingOrder)
      );
  }
}
