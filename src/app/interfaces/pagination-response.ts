import { HouseDetailed } from './house-detailed';
import { HouseStandard } from './house-standard';
import { Review } from './review';
import { ValuedClient } from './valued-client';

export interface PaginationResponse {
  items: Review[] | ValuedClient[] | HouseDetailed[] | HouseStandard[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
