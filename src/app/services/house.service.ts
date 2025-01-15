import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Property } from '../interfaces/property';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProperty = (id: number): Observable<Property> =>
    this.http.get<Property>(`${this.apiUrl}/Houses/${id}`);
}
