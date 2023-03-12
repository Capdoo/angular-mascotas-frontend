import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewUser } from '../models/new-user'; 
import { AuthService } from '../services/auth.service'; 
import { TokenService } from '../services/token.service'; 

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  newUser!: NewUser;
  //fields
  firstName!: string;
  lastName!: string;
  surName!: string;

  dni!: string;
  phone!: string;
  address!: string;
  
  username!: string;
  email!: string;
  password!: string;
  //err mssg
  errMssg!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
  }

  onRegister(): void{
    this.newUser = new NewUser(
      this.firstName,
      this.lastName,
      this.surName,
      this.dni,
      this.username,
      this.phone,
      this.address,
      this.email,
      this.password
      );

    this.authService.register(this.newUser).subscribe(
      data => {
        this.toastr.success('Cuenta creada', 'OK', {
          timeOut: 3000, positionClass: 'toastr-top-center',
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.errMssg = err.error.message;
        this.toastr.error(err.error.message, 'FAIL', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
