import { Review } from './review';

export interface PaginationResponse {
  items: Review[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
