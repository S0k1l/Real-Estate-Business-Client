import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { HousesTypes } from '../interfaces/houses-types';

@Injectable({
  providedIn: 'root',
})
export class HousesTypesService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll = (): Observable<HousesTypes[]> =>
    this.http.get<HousesTypes[]>(`${this.apiUrl}/HousesTypes`);
}
