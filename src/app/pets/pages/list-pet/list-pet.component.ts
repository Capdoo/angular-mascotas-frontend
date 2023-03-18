import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { PetDto } from '../../models/pet-dto';
import { PetsService } from '../../services/pets.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.css']
})
export class ListPetComponent implements OnInit {

  myPets : PetDto[] = [];
  errMssg! : string;

  constructor(private petsService:PetsService, 
    private toastr: ToastrService, 
    public domSanitizer: DomSanitizer,
    private router: Router,
    public resourcesService: ResourcesService) { }

  ngOnInit(): void {

    this.petsService.getAllPetsByOwner().subscribe(
      data => {
        this.myPets = data.filter( pet => pet.state === "CREATED");
        console.log(this.myPets);
      },
      err => {
        this.errMssg = err.error.message;
        this.toastr.error(err.error.message, 'FAIL', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        
        console.log(this.errMssg);
      }
    );
  }

  viewDetails(idPet: number){
    //aux
    this.resourcesService.setGlobalPetIdDetail(idPet);
    this.router.navigate(['/detail-pet']);
  }

}
