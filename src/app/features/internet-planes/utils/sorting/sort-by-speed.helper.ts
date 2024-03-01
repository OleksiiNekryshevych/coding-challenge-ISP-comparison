import { SortingOrder } from '../../../../shared/enums/sorting-order.enum';
import { InternetPlanesSortingType } from '../../enums/internet-planes-sorting-type.enum';
import { InternetPlan } from '../../interfaces/internet-plan.interface';

export function sortBySpeed(
  a: InternetPlan,
  b: InternetPlan,
  order: SortingOrder,
  type:
    | InternetPlanesSortingType.DOWNLOAD_SPEED
    | InternetPlanesSortingType.UPLOAD_SPEED
) {
  if (order === SortingOrder.ASCENDING) {
    return a.speed[type] > b.speed[type] ? 1 : -1;
  } else {
    return a.speed[type] > b.speed[type] ? -1 : 1;
  }
}
