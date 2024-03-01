import { SortingOrder } from '../enums/sorting-order.enum';

export interface PaginationParams<T> {
  page: number;
  perPage: number;
  sort: T; // can be used by on various pages with own parameters of sorting
  order: SortingOrder;
}
