import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  details_url = environment.detailsUrl;

  constructor(private httpClient: HttpClient) { }

	public getAllSpecies(): Observable<string[]>{
    const url = `${this.details_url}/species`;
		return this.httpClient.get<string[]>(url);
  }

	public getBreedsBySpecies(species: string): Observable<string[]>{
    const url = `${this.details_url}/breeds/${species}`;
		return this.httpClient.get<string[]>(url);
  }



}
