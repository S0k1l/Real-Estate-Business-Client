import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PaginationResponse } from '../interfaces/pagination-response';
import { SearchRequest } from '../interfaces/search-request';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getReviews = (
    pageIndex: number,
    pageSize: number
  ): Observable<PaginationResponse> =>
    this.http.get<PaginationResponse>(
      `${this.apiUrl}/ReviewsCotroller?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );

  getValuedClients = (
    pageIndex: number,
    pageSize: number
  ): Observable<PaginationResponse> =>
    this.http.get<PaginationResponse>(
      `${this.apiUrl}/ValuedClients?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );

  getHouseDetailed = (
    pageIndex: number,
    pageSize: number
  ): Observable<PaginationResponse> =>
    this.http.get<PaginationResponse>(
      `${this.apiUrl}/Houses/Details?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );

  getHouseWithSearch = (
    pageIndex: number,
    pageSize: number,
    searchRequest: SearchRequest
  ): Observable<PaginationResponse> =>
    this.http.post<PaginationResponse>(
      `${this.apiUrl}/Houses/Adverts?pageIndex=${pageIndex}&pageSize=${pageSize}`,
      searchRequest
    );
}
