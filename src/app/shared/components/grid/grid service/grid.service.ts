import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(public http: HttpClient) { }

  getNewsFeed(isPagination, pageNumber) {
    let url = '/v1/search?tags=front_page';
    if(isPagination){
      url = '/v1/search?page='+ pageNumber;
    }
    return this.http.get(environment.url + url);
  }
}
