import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { InternetPlan } from '../../interfaces/internet-plan.interface';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-internet-plan',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule, PricePipe],
  templateUrl: './internet-plan.component.html',
  styleUrl: './internet-plan.component.scss',
})
export class InternetPlanComponent {
  @Input() plan!: InternetPlan;
  @Input() index!: number;

  redirectToPlan(): void {
    //TODO: redirect to details page and change route in browser (using plan.id)
    console.log('redirect to plan details. ', this.plan.id, this.plan);
  }
}
