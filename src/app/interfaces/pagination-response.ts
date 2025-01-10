import { Review } from './review';
import { ValuedClient } from './valued-client';

export interface PaginationResponse {
  items: Review[] | ValuedClient[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
