export class PetDto{
    id: number;
    name: string;
    gender: string;
    birthDate: string;
    registerDate: string;
    colour: string;
    specificBreed: string;
    characteristic: string;
    size: string;
    species: string;
    breed: string;
    owner_id: number;
    detail_id: number;
    encoded: string;

    constructor(
        id: number,
        name: string,
        gender: string,
        birthDate: string,
        registerDate: string,
        colour: string,
        specificBreed: string,
        characteristic: string,
        size: string,
        species: string,
        breed: string,
        owner_id: number,
        detail_id: number,
        encoded: string)
    {
        this.id = id;
        this.name = name; 
        this.gender = gender;
        this.birthDate = birthDate;
        this.registerDate = registerDate;
        this.colour = colour;
        this.specificBreed = specificBreed;
        this.characteristic = characteristic;
        this.size = size;
        this.species = species;
        this.breed = breed;
        this.owner_id = owner_id;
        this.detail_id = detail_id;
        this.encoded = encoded;
    }

}

