import { HttpClient, HttpParams } from '@angular/common/http';
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

  //http params
  //1. update

  public getAllPetsByOwner(): Observable<PetDto[]>{
    const url = `${this.pets_url}/owner`;
    return this.httpClient.get<PetDto[]>(url);
  }

  public registerPet(registerPet: PetDto): Observable<PetDto[]>{
    const url = `${this.pets_url}`;
    return this.httpClient.post<PetDto[]>(url, registerPet);
  }

  public getPetById(petId: number): Observable<PetDto>{
    const url = `${this.pets_url}/${petId}`;
    return this.httpClient.get<PetDto>(url);
  }

  public updatePet(petId: number, updatePet: PetDto): Observable<PetDto>{
    const url = `${this.pets_url}/${petId}`;
    return this.httpClient.put<PetDto>(url, updatePet);
  }

  public deletePet(petId: number): Observable<PetDto>{
    const url = `${this.pets_url}/${petId}`;
    return this.httpClient.delete<PetDto>(url);
  }

}
