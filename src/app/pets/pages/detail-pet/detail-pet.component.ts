import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DetailsService } from 'src/app/services/details.service';
import { ResourcesService } from 'src/app/services/resources.service';
import { PetDto } from '../../models/pet-dto';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-detail-pet',
  templateUrl: './detail-pet.component.html',
  styleUrls: ['./detail-pet.component.css']
})
export class DetailPetComponent implements OnInit {

  petId!: number;
  currentPet!: PetDto;

  //original fields
  origName!: string;
  origColour!: string;

  origSpecies!: string;
  origSize!: string;
  origDate!: string;

  origBreed!: string;
  origGender!: string;

  origCharacteristic!: string;

  //test
  isReadOnly!: boolean;

  listGender: string[] = ["Female", "Male"];
  listSizes: string[] = ["Small", "Medium", "Big"];
  listSpecies!: string[];
  listBreeds!: string[];

  //image
  imgSrc!: string;
  origEncoded!: string;

  //for deleting
  clearModal!: boolean;


  constructor(public resourcesService: ResourcesService,
    private router: Router,
    private petsService: PetsService,
    private detailsService: DetailsService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.isReadOnly = true;
    this.clearModal = true;

    this.petId = this.resourcesService.getGlobalPetIdDetail();
    console.log(this.petId);

    if (!this.petId) {
      console.log("No pet id provided");
      this.router.navigate(['/list-pet']);
    } else {
      //load pet id for detail
      this.petsService.getPetById(this.petId).subscribe(
        data => {
          this.currentPet = data;
          this.origSpecies = this.currentPet.species;
          this.origSize = this.currentPet.size;
          this.origName = this.currentPet.name;
          this.origColour = this.currentPet.colour;

          const dateOrig = this.currentPet.birthDate.split("/");
          
          //orig 31/02/1998
          //desired 1998-02-31
          this.origDate = `${dateOrig[2]}-${dateOrig[1]}-${dateOrig[0]}`

          this.origBreed = this.currentPet.breed;
          this.origGender = this.currentPet.gender;
          this.origCharacteristic = this.currentPet.characteristic;
          this.imgSrc = "data:image/jpeg;base64,"+this.currentPet.encoded;
          this.origEncoded = this.imgSrc;

                //load orig breeds by orig species
                this.detailsService.getBreedsBySpecies(this.origSpecies).subscribe(
                  data => {
                    this.listBreeds = data;
                  },
                  err => {
                    console.log(err);
                  }
                );

          console.log("From OnInit:");
          console.log(this.currentPet);
        },
        err => {
          console.log(err);
        }
      );

      //Load species
      this.detailsService.getAllSpecies().subscribe(
        data => {
          this.listSpecies = data;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  seeTest(): void {
    this.isReadOnly = !this.isReadOnly;
  }

  onChangeNewSpecies(event: any): void {
    this.origSpecies = event;
    console.log(this.origSpecies);

    this.detailsService.getBreedsBySpecies(this.origSpecies).subscribe(
      data => {
        this.listBreeds = data;
        this.origBreed = this.listBreeds[this.listBreeds.length-1];
      },
      err => {
        console.log(err);
      }
    );

  }

  onChangeNewSize(event: any): void {
    this.origSize = event;
    console.log(this.origSize);
  }


  onChangeNewBreed(selectedBreed: any): void {
    this.origBreed = selectedBreed;
    console.log(this.origBreed);
  }

  onChangeNewGender(selectedGender: any): void{
    this.origGender = selectedGender;
    console.log(this.origGender);
  }



  //Show image in form
  readUrl(event: any){
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onload = e => this.imgSrc = String(reader.result);
    reader.readAsDataURL(file);
    
    this.catchEncoded(event);
  }

  //Catch b64 encoded
  catchEncoded(event: any): void{
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = String(reader.result)!
                                  .replace('data:', '')
                                  .replace(/^.+,/, '');
      this.origEncoded = base64String;
      //console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }


  updatePet(): void{
    console.log("Start updating");
    
    //First time
    //orig 1998-02-31
    //desired 31/02/1998
    const source = this.origDate.split("-");
    this.origDate = `${source[2]}/${source[1]}/${source[0]}`;

    const updatePet = new PetDto(this.origName, this.origGender, this.origDate,
      this.origColour, this.origCharacteristic, this.origSize, this.origSpecies, 
      this.origBreed, this.origEncoded);

    console.log("Send to update pet ");
    console.log(updatePet);

    this.petsService.updatePet(this.petId, updatePet).subscribe(
      data => {
        this.resourcesService.setGlobalPetIdDetail(this.petId);
        this.router.navigate(['/detail-pet']);
        this.toastrService.success('Pet updated successfully','OK',{
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      },
      err => {
        console.log(err);
      }
    );

    //Restore data readable for component
    const dateOrig = this.origDate.split("/");
    this.origDate = `${dateOrig[2]}-${dateOrig[1]}-${dateOrig[0]}`
    this.isReadOnly = true;
  }

  deletePet(): void{

    this.petsService.deletePet(this.petId).subscribe(
      data => {
        this.router.navigate(['/list-pet']);
        
        this.toastrService.success(`${data.name} deleted successfully`,'OK',{
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        
        //window.location.reload();
      },
      err => {
        console.log(err);
      }
    );


  }

  viewData(): void {
    console.log("This is my orig name " + this.origName);
    console.log("This is my orig colour " + this.origColour);
    console.log("This is my orig species " + this.origSpecies);
    console.log("This is my orig size " + this.origSize);
    console.log("This is my orig date " + this.origDate);
    console.log("This is my orig breed " + this.origBreed);
    console.log("This is my orig gender " + this.origGender);
    console.log("This is my orig characteristic " + this.origCharacteristic);
    console.log("This is my orig encoded " + this.origEncoded);

  }


  activeModal(): void{
    this.clearModal = false;
  }


}
