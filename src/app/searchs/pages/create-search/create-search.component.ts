import { Component, OnInit } from '@angular/core';

import { SearchsService } from '../../services/searchs.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PetDto } from 'src/app/pets/models/pet-dto';
import { PetsService } from 'src/app/pets/services/pets.service';
import { Router } from '@angular/router';
import { SearchDto } from '../../models/search-dto';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-create-search',
  templateUrl: './create-search.component.html',
  styleUrls: ['./create-search.component.css']
})
export class CreateSearchComponent implements OnInit {

  petsFromOwner!: PetDto[];
  petIdSelected!: number;
  //after selection
  petSelected!: PetDto;
  //toshow
  petName: string = "";
  petSpecies: string = "";
  petEncoded: string = "";
  //boolean-img
  isPetSelected: boolean = false;

  //search details
  address!: string;
  district!: string;  
  phoneA!: string;
  phoneB!: string;
  lostDate!: string;
  message!: string;

  constructor(private searchsService: SearchsService,
    public domSanitizer:DomSanitizer,
    private petsService: PetsService,
    private router: Router,
    private resourceService: ResourcesService) { }

  ngOnInit(): void {
    this.petsService.getAllPetsByOwner().subscribe(
      data => {
        this.petsFromOwner = data;
        console.log(this.petsFromOwner);
      },
      err => {
        console.log(err);
      }
    );
  }

  openSelectPet(): void{
    console.log("Select pet at this point!");
  }

  selectPet(petId: number): void{
    this.petIdSelected = petId;
    console.log(this.petIdSelected);
    //assign pet selection
    this.petsService.getPetById(this.petIdSelected).subscribe(
      data => {
        this.petSelected = data;
        this.petName = this.petSelected.name;
        this.petSpecies = this.petSelected.species;
        this.petEncoded = this.petSelected.encoded;
        this.isPetSelected = true;
      },
      err => {
        console.log(err);
      }
    );
  }

  updateBirthDate(): void{
    //  actual: 1998-31-02
    // desire:  31/02/1998
    const values = this.lostDate.split("-");
    this.lostDate = `${values[2]}/${values[1]}/${values[0]}`;
  }

  cancelSearch(): void{
    this.router.navigate(['/list-searches']);
  }

  createSearch(): void{
    this.updateBirthDate();
    const newSearch = new SearchDto(
      this.petIdSelected,
      this.address,
      this.district,
      this.phoneA,
      this.phoneB,
      this.lostDate,
      this.message
    );
    this.searchsService.createSearch(newSearch).subscribe(
      data => {
        this.resourceService.setGlobalSearchId(data.id);
        this.router.navigate(['/detail-search']);
      },
      err => {
        console.log(err);
      }
    );


  }

}
