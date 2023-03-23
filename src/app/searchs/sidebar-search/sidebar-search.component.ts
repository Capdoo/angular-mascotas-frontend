import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrls: ['./sidebar-search.component.css']
})
export class SidebarSearchComponent implements OnInit {

  @Input() activeList!: string;
  @Input() activeMySearchs!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
