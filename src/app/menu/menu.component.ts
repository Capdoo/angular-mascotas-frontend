import { Component, OnInit } from '@angular/core';
import { TokenService } from '../auth/services/token.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  isLogged = false;
  isAdmin = false;

  constructor(private tokenService: TokenService){ }

  ngOnInit(): void {
    //Error: el onInit se ejecuta una vez y no detecta la sesion
    //Por eso se debe emitir isLogged e isAdmin
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }

  onLogOut(): void{
    this.tokenService.logOut();
  }

}
