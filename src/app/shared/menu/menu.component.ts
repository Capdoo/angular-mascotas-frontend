import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from 'src/app/auth/services/token.service';
import { AuthreloadService } from 'src/app/services/authreload.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  isLogged = false;
  isAdmin = false;
  //later ...
  isOwner = false;

  constructor(private tokenService: TokenService, 
    private authReloadService: AuthreloadService){ }

  ngOnInit(): void {
    console.log("testing init menu");


    //Error: el onInit se ejecuta una vez y no detecta la sesion
    //Por eso se debe emitir isLogged e isAdmin
    this.isLogged = this.tokenService.isLogged();
    this.authReloadService.messageSrcIsLogged$
    .subscribe(
      message => {
        console.log("log from subs is logged ", message);
        if (message){
          this.isLogged = message;
        }else{
          console.log("log from subs is logged elseee ", message);
          this.isLogged = this.tokenService.isLogged();
        }
      }
      )
      
    this.isAdmin = this.tokenService.isAdmin();
    this.authReloadService.messageSrcIsAdmin$
    .subscribe(
      message => {
        if (message){
          this.isAdmin = message;
        }else{
          this.isAdmin = this.tokenService.isAdmin();
        }
      }
    )
  }

  onLogOut(): void{
    this.tokenService.logOut();
    this.isLogged = false;
  }

}
