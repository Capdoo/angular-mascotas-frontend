import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';
import { SearchDto } from '../../models/search-dto';
import { SearchsService } from '../../services/searchs.service';

@Component({
  selector: 'app-edit-search',
  templateUrl: './edit-search.component.html',
  styleUrls: ['./edit-search.component.css']
})
export class EditSearchComponent implements OnInit {

  searchId!: number;
  currentSearch!: SearchDto;

  constructor(private resourcesService: ResourcesService, 
    private router: Router,
    private searchsService: SearchsService,
    public domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.searchId = this.resourcesService.getGlobalSearchId();
    if(!this.searchId){
      this.router.navigate(['/my-searchs']);
    }else{
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

}
