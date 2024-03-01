import { SortingOrder } from '../../../shared/enums/sorting-order.enum';
import { InternetPlanesSortingType } from '../enums/internet-planes-sorting-type.enum';
import { InternetPlanesPaginationParams } from '../interfaces/pagination-params.interface';

export const defaultPlanesPaginationConfig: InternetPlanesPaginationParams = {
  page: 1,
  perPage: 15,
  sort: InternetPlanesSortingType.PRICE,
  order: SortingOrder.ASCENDING,
};
