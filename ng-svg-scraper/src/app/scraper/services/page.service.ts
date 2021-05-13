import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  endpoint = "http://localhost:5000/api/scrape"
  constructor(private http: HttpClient) { }


  get(url) {
    return this.http.post(this.endpoint, {url: url});
  }
}
