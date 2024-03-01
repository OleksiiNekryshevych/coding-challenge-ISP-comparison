import { SortingOrder } from '../../../../shared/enums/sorting-order.enum';
import { InternetPlan } from '../../interfaces/internet-plan.interface';

export function sortByPrice(
  a: InternetPlan,
  b: InternetPlan,
  order: SortingOrder
) {
  if (order === SortingOrder.ASCENDING) {
    return a.price.value > b.price.value ? 1 : -1;
  } else {
    return a.price.value > b.price.value ? -1 : 1;
  }
}
