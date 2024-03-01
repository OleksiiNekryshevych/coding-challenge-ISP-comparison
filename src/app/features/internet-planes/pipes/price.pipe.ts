import { Pipe, PipeTransform } from '@angular/core';

import { InternetPlanPrice } from '../interfaces/internet-plan.interface';

@Pipe({ name: 'price', standalone: true })
export class PricePipe implements PipeTransform {
  transform(price: InternetPlanPrice) {
    return `${price.value} ${price.currency}`;
  }
}
