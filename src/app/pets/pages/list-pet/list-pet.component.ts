import { Component, OnInit } from '@angular/core';
import { PetDto } from '../../models/pet-dto';
import { PetsService } from '../../services/pets.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html'
})
export class ListPetComponent implements OnInit {

  myPets : PetDto[] = [];
  errMssg! : string;

  constructor(private petsService:PetsService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.petsService.getAllPetsByOwner().subscribe(
      data => {
        this.myPets = data;
        console.log(this.myPets);
      },
      err => {
        this.errMssg = err.error.message;
        this.toastr.error(err.error.message, 'FAIL', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        
        console.log(this.errMssg);
      }
    )

  }

}
