export class SearchDto{
    id!: number;
    petId: number;
    address: string;
    district: string;
    phoneA: string;
    phoneB: string;
    lostDate: string;
    message: string;

    //nopost
    namePet!: string;
    speciesPet!: string;
    breedPet!: string;
    registerDate!: string;
    encoded!: string;
    state!: string;
    
    constructor(
        petId: number,
        address: string,
        district: string,
        phoneA: string,
        phoneB: string,
        lostDate: string,
        message: string)
    {
        this.petId = petId;
        this.address = address;
        this.district = district;
        this.phoneA = phoneA;
        this.phoneB = phoneB;
        this.lostDate = lostDate;
        this.message = message;
    }

}

