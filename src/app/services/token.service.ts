import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



//Save in navigator
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

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

  public setUsername(username: string): void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public isLogged(): boolean{
    return this.getToken() == null ? false : true;
  }

  public getUsername(): string | null{
    if (!this.isLogged()) return null;
    const payload = this.getToken()?.split('.')[1];
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

  //Authorities
  public setAuthorities(authorities: string[]): void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    console.log('From token service');
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)){
      const auth_keys = sessionStorage.getItem(AUTHORITIES_KEY);
      console.log(auth_keys);
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority: any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut(): void{
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['/']);
  }
}