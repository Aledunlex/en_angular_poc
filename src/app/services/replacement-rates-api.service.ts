import { Injectable } from '@angular/core';
import { ReplacementApiResponse } from '../models/replacement-api-response.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReplacementRatesApiService {
  private readonly API_URL = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-remplacement-premier-degre/records';

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getReplacementRatesData(limit: number = 20): Observable<ReplacementApiResponse> {
    return this.httpClient.get<ReplacementApiResponse>(`${this.API_URL}?limit=${limit}`);
  }
}
