import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-pet',
  templateUrl: './sidebar-pet.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class SidebarPetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
