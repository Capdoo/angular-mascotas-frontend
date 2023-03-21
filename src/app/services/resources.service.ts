import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  public globalPetIdDetail!: number;
  public globalSearchId!: number;

  constructor() { }

  //aux methods for pet id
  public setGlobalPetIdDetail(petIdDetail: number): void{
    this.globalPetIdDetail = petIdDetail;
  }

  public getGlobalPetIdDetail(): number{
    return this.globalPetIdDetail;
  }

  //aux methods for search
  public setGlobalSearchId(searchId: number): void{
    this.globalSearchId = searchId;
  }

  public getGlobalSearchId(): number{
    return this.globalSearchId;
  }

}
