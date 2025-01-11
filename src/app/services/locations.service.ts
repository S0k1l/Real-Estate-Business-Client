import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll = (): Observable<{ locations: string[] }> =>
    this.http.get<{ locations: string[] }>(`${this.apiUrl}/Houses/Locations`);
}
