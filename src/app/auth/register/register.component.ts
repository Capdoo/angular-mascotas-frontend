import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  newUser!: NewUser;
  name!: string;
  username!: string;
  email!: string;
  password!: string;
  errMssg!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router

  ){}

  ngOnInit(): void {
  }

  onRegister(): void{
    this.newUser = new NewUser(this.name, this.username, this.email, this.password);
    this.authService.register(this.newUser).subscribe(
      data => {
        // this.toastr.success('Cuenta creada', 'OK', {
        //   timeOut: 3000, positionClass: 'toastr-top-center',
        // });
        this.router.navigate(['/login']);
      },
      err => {
        this.errMssg = err.error.message;
        // this.toastr.error(err.error.message, 'FAIL', {
        //   timeOut: 3000, postionClass: 'toast-top-center',
        // });
      }
    );
  }

}
