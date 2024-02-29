import { Component } from '@angular/core';
import { ListPageComponent } from '../../../shared/components';
import { InternetPlan } from '../interfaces/internet-plan.interface';

@Component({
  selector: 'app-internet-planes-list',
  standalone: true,
  imports: [],
  templateUrl: './internet-planes-list.component.html',
  styleUrl: './internet-planes-list.component.scss',
})
export class InternetPlanesListComponent extends ListPageComponent<
  InternetPlan[]
> {
  protected override load(): void {
    console.log('load internet planes with queries: ', this.currentPage);
  }
}
