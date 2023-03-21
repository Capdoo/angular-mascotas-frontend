import { Component, Input, OnInit } from '@angular/core';
import { SearchDto } from '../../models/search-dto';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent implements OnInit {

  @Input() listTarget!:SearchDto[];
  @Input() nextIsDetails!:boolean;
  
  @Input() nextIsEditable!:boolean;

  constructor(public domSanitizer: DomSanitizer,) { }

  ngOnInit(): void {
  }

  viewNext(searchId: number): void{
    //single
    if(this.nextIsDetails){

    }else{
      //editable
    }
  }

}
