import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(public http: HttpClient) { }

  getNewsFeed() {
    return this.http.get(environment.url + '/v1/search?tags=front_page')
  }
}
