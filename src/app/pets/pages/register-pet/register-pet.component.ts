import { Component, OnInit } from '@angular/core';

import { DetailsService } from 'src/app/services/details.service';
import { PetsService } from '../../services/pets.service';

import { ToastrService } from 'ngx-toastr';
import { PetDto } from '../../models/pet-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  listSpecies: string[] = [];

  name!: string;
  listGender: string[] = ["Female", "Male"];
  gender = "Female";
  listSizes: string[] = ["Small", "Medium", "Big"];

  species!: string;
  breed = "";
  size = "Small";

  description = "";
  colour = "";
  bdate="";

  characteristic = "";
  imgSrc! : string;

  listBreeds: string[] = ["Select species"];
  encoded!: string;

  newPet!: PetDto;

  constructor(private petsService:PetsService, 
    private detailsService:DetailsService, 
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    //load species
    this.detailsService.getAllSpecies().subscribe(
      data => {
        this.listSpecies = data;
      },
      err => {
        console.log(err);
      }
    )
  }
  
  registerPet():void{
    this.updateBirthDate();
    this.newPet = new PetDto(
      this.name, 
      this.gender, 
      this.bdate, 
      this.colour, 
      this.characteristic, 
      this.size,
      this.species,
      this.breed,
      this.encoded
      );
    this.petsService.registerPet(this.newPet).subscribe(
      data => {
        console.log("THIS IS THE SENDING PET");
        console.log(this.newPet);
        console.log("THIS IS THE DATA");
        console.log(data);
        this.router.navigate(['/list-pet']);
        this.toastr.success('Pet registered successfully','OK',{
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      },
      err => {
        this.toastr.error(err.error.message, 'FAIL', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    )

  }

  //Show image in form
  readUrl(event: any){
      const file = (event.target as HTMLInputElement).files![0];
      const reader = new FileReader();
      reader.onload = e => this.imgSrc = String(reader.result);
      reader.readAsDataURL(file);
      
      this.catchEncoded(event);
  }


  onChangeSpecies(speciesSelected: any): void{
    this.species = speciesSelected;
    this.updateBreeds();
  }

  //update breeds according species
  updateBreeds(): void{
    this.detailsService.getBreedsBySpecies(this.species).subscribe(
      data => {
        this.listBreeds = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  //update date format
  updateBirthDate(): void{
    //  actual: 1998-31-02
    // desire:  31/02/1998
    const values = this.bdate.split("-");
    this.bdate = `${values[2]}/${values[2]}/${values[0]}`;
  }

  //Catch b64 encoded
  catchEncoded(event: any): void{
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = String(reader.result)!
                                  .replace('data:', '')
                                  .replace(/^.+,/, '');
      this.encoded = base64String;
    };
    reader.readAsDataURL(file);
  }

  seeDate(): void{
    console.log(this.encoded);
  }
}
