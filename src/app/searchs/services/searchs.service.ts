import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SearchDto } from '../models/search-dto';


@Injectable({
  providedIn: 'root'
})
export class SearchsService {

  searchs_url = environment.searchsUrl;

  constructor(private httpClient: HttpClient) { }

  public getAllSearchs(): Observable<SearchDto[]>{
    const url = `${this.searchs_url}`;
    return this.httpClient.get<SearchDto[]>(url);
  }

}
