import { Component, OnInit } from '@angular/core';
import { SearchDto } from '../../models/search-dto';
import { SearchsService } from '../../services/searchs.service';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnInit {

  listAllSearchs!: SearchDto[];

  constructor(private searchService:SearchsService) { }

  ngOnInit(): void {

    //load all searchs
    this.searchService.getAllSearchs().subscribe(
      data => {
        this.listAllSearchs = data;
      },
      err => {
        console.log(err);
      }
    );

  }

}
