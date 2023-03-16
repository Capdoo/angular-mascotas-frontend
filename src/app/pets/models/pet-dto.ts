export class PetDto{
    name: string;
    gender: string;
    birthDate: string;
    registerDate!: string;
    colour: string;
    characteristic: string;
    size: string;
    species: string;
    breed: string;
    owner_id!: number;
    detail_id!: number;
    encoded: string;

    constructor(
        name: string,
        gender: string,
        birthDate: string,
        colour: string,
        characteristic: string,
        size: string,
        species: string,
        breed: string,
        encoded: string)
    {
        this.name = name; 
        this.gender = gender;
        this.birthDate = birthDate;
        this.colour = colour;
        this.characteristic = characteristic;
        this.size = size;
        this.species = species;
        this.breed = breed;
        this.encoded = encoded;
    }

}

