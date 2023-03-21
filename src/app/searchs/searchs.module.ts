import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateSearchComponent } from './pages/create-search/create-search.component';
import { DetailSearchComponent } from './pages/detail-search/detail-search.component';
import { ListSearchComponent } from './pages/list-search/list-search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { MySearchsComponent } from './pages/my-searchs/my-searchs.component';

import { ListSectionComponent } from './components/list-section/list-section.component';
import { PetSelectionComponent } from './components/pet-selection/pet-selection.component';

@NgModule({
  declarations: [
    CreateSearchComponent,
    DetailSearchComponent,
    ListSearchComponent,
    SidebarSearchComponent,
    MySearchsComponent,
    ListSectionComponent,
    PetSelectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],exports: [
    CreateSearchComponent,
    DetailSearchComponent,
    ListSearchComponent,
    SidebarSearchComponent
  ]
})
export class SearchsModule { }
