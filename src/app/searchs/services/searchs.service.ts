import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

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

  public getSeachById(searchId: number): Observable<SearchDto>{
    const url = `${this.searchs_url}/${searchId}`;
    return this.httpClient.get<SearchDto>(url);
  }

  //using token
  public getSearchsByOwner(): Observable<SearchDto[]>{
    const url = `${this.searchs_url}/owner`;
    return this.httpClient.get<SearchDto[]>(url);
  }
  //create search
  public createSearch(newSearch: SearchDto): Observable<SearchDto>{
    const url = `${this.searchs_url}`;
    return this.httpClient.post<SearchDto>(url, newSearch);
  }
  //find search by pet id
  public getSearchByPetId(petId: number): Observable<SearchDto>{
    const url = `${this.searchs_url}/pet/${petId}`;
    console.log("pet id in service: "+petId)
    // return this.httpClient.get(url)
    //                       .pipe( catchError => of(['NO INFOR ERROR']));
    return this.httpClient.get<SearchDto>(url);
  }

}
