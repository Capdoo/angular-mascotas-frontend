import { Component, Input, OnInit } from '@angular/core';
import { SearchDto } from '../../models/search-dto';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent implements OnInit {

  @Input() listTarget!:SearchDto[];
  @Input() nextIsDetails!:boolean;
  
  @Input() nextIsEditable!:boolean;

  constructor(public domSanitizer: DomSanitizer, 
    private resourcesService: ResourcesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  viewNext(searchId: number): void{
    //single
    if(this.nextIsDetails){
      this.resourcesService.setGlobalSearchId(searchId);
      this.router.navigate(['/detail-search']);
    }else{
      //editable
    }
  }

}
