import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginUser } from '../models/login-user'; 
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service'; 

import { ToastrService } from 'ngx-toastr';
import { AuthreloadService } from 'src/app/services/authreload.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginUser!: LoginUser;
  username!: string;
  password!: string;
  errMssg!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,

    public authReloadService: AuthreloadService
  ){}

  ngOnInit(): void {
  }

  onLogin(): void{
    this.loginUser = new LoginUser(this.username, this.password);
    this.authService.login(this.loginUser).subscribe(

      data => {
        this.tokenService.setToken(data.token);

        //auth generals
        this.authReloadService.sendMessageIsAdmin(this.tokenService.isAdmin());
        this.authReloadService.sendMessageIsLogged(this.tokenService.isLogged());

        //navigate
        this.router.navigate(['/']);
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

}
