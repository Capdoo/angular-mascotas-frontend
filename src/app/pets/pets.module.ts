import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RegisterPetComponent } from './pages/register-pet/register-pet.component';
import { DetailPetComponent } from './pages/detail-pet/detail-pet.component';
import { ListPetComponent } from './pages/list-pet/list-pet.component';
import { SidebarPetComponent } from './sidebar-pet/sidebar-pet.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    RegisterPetComponent,
    DetailPetComponent,
    ListPetComponent,
    SidebarPetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],  
  exports: [
    RegisterPetComponent,
    DetailPetComponent,
    ListPetComponent,
    SidebarPetComponent
  ]
})
export class PetsModule { }
