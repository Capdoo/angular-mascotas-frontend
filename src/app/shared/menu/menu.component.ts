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

  constructor(private tokenService: TokenService, private authReloadService: AuthreloadService){ }

  ngOnInit(): void {
    //Error: el onInit se ejecuta una vez y no detecta la sesion
    //Por eso se debe emitir isLogged e isAdmin
    this.authReloadService.messageSrcIsLogged$
      .subscribe(
        message => {
          this.isLogged = message;
        }
      )

    this.authReloadService.messageSrcIsAdmin$
    .subscribe(
      message => {
        this.isAdmin = message;
      }
    )
  }

  onLogOut(): void{
    this.tokenService.logOut();
    this.isLogged = false;
  }

}
