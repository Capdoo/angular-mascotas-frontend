import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  public globalPetIdDetail!: number;

  constructor() { }

  //aux methods
  public setGlobalPetIdDetail(petIdDetail: number): void{
    this.globalPetIdDetail = petIdDetail;
  }

  public getGlobalPetIdDetail(): number{
    return this.globalPetIdDetail;
  }

}
