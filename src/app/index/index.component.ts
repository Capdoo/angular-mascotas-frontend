import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenService } from '../auth/services/token.service'; 
import { AuthreloadService } from '../services/authreload.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  username!: string;
  //auth
  isLogged = false;
  isAdmin = false;


  constructor(
    private tokenService: TokenService,
    private authReloadService: AuthreloadService 
  ){}

  ngOnInit(): void {

    this.username = this.tokenService.getUsername()!;
    //auth
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();

  }

}
