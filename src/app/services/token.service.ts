import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//Save in navigator
const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor(private router:Router) { }

  public setToken(token: string): void{
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null{
    return localStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean{
    return this.getToken() == null ? false : true;
  }

  public getUsername(): string | null{
    if (!this.isLogged()) return null;
    const payload = this.getToken()!.split('.')[1];
    const payload_decoded = atob(payload!);
    const values = JSON.parse(payload_decoded);
    const username = values.sub;
    return username;
  }

  public isAdmin(): boolean{
    if (!this.isLogged()) return false;
    const payload = this.getToken()?.split('.')[1];
    const payload_decoded = atob(payload!);
    const values = JSON.parse(payload_decoded);
    const roles = values.roles;
    return roles.indexOf('ROLE_ADMIN') < 0 ? false : true;
  }

  public logOut(): void{
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}
