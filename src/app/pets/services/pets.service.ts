import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PetDto } from '../models/pet-dto';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  pets_url = environment.petsUrl;

  constructor(private httpClient: HttpClient) { }

  public getAllPetsByOwner(): Observable<PetDto[]>{
    const url = `${this.pets_url}/owner`;
    return this.httpClient.get<PetDto[]>(url);
  }

}
