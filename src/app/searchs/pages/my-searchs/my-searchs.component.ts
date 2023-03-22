import { Component, OnInit } from '@angular/core';
import { SearchDto } from '../../models/search-dto';
import { SearchsService } from '../../services/searchs.service';

@Component({
  selector: 'app-my-searchs',
  templateUrl: './my-searchs.component.html',
  styleUrls: ['./my-searchs.component.css']
})
export class MySearchsComponent implements OnInit {

  listMySearchs!: SearchDto[];

  constructor(private searchsService: SearchsService) { }

  ngOnInit(): void {

    this.searchsService.getSearchsByOwner().subscribe(
      data => {
        this.listMySearchs = data;
      },
      err => {
        console.log(err);
      }
    );

    
  }


}
