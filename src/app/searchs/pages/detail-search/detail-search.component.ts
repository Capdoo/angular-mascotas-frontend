import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { ResourcesService } from 'src/app/services/resources.service';
import { SearchDto } from '../../models/search-dto';
import { SearchsService } from '../../services/searchs.service';


@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.css']
})
export class DetailSearchComponent implements OnInit {

  searchId!: number;
  currentSearch!: SearchDto;

  constructor(private resourceService: ResourcesService,
    public domSanitizer:DomSanitizer,
    private searchsService: SearchsService) { }

  ngOnInit(): void {
    this.searchId = this.resourceService.getGlobalSearchId();
    this.searchsService.getSeachById(this.searchId).subscribe(
      data => {
        this.currentSearch = data;
      },
      err => {
        console.log(err);
      }
    );

  }

}
