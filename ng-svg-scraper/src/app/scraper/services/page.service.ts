import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  endpoint = '${environment.apiEndpoint}/api/scrape';
  constructor(private http: HttpClient) {}

  get(url) {
    return this.http.post(this.endpoint, { url: url });
  }
}
