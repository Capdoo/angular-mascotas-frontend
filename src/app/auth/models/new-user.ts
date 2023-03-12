export class NewUser {
    firstName: string;
    lastName: string;
    surName: string;
    dni: string;
    username: string;
    phone: string;
    address: string;
    email: string;
    password: string;

    constructor(
        firstName: string,
        lastName: string,
        surName: string,
        dni: string,
        username: string, 
        phone: string,
        address: string,
        email: string, 
        password: string) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.surName = surName;
        this.dni = dni;
        this.username = username;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.password = password;
    }

}