import { PaginationParams } from '../../../shared/interfaces/pagination-params.interface';
import { InternetPlanesSortingType } from '../enums/internet-planes-sorting-type.enum';

export interface InternetPlanesPaginationParams
  extends PaginationParams<InternetPlanesSortingType> {}
