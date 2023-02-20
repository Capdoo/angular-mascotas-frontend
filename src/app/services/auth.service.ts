import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { NewUser } from '../models/new-user';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login-user';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth_url = environment.authUrl;

  constructor(private httpClient: HttpClient) { }

  public register(newUser: NewUser): Observable<any>{
    const url = `${this.auth_url}/register`;
    return this.httpClient.post<any>(url, newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    const url = `${this.auth_url}/login`;
    return this.httpClient.post<JwtDto>(url, loginUser);
  }

  public refresh(jwtDto: JwtDto): Observable<JwtDto>{
    const url =  `${this.auth_url}/refresh`;
    return this.httpClient.post<JwtDto>(url, jwtDto);
  }

}
