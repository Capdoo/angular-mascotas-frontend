import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPetComponent } from './pages/register-pet/register-pet.component';
import { DetailPetComponent } from './pages/detail-pet/detail-pet.component';
import { EditPetComponent } from './pages/edit-pet/edit-pet.component';
import { ListPetComponent } from './pages/list-pet/list-pet.component';
import { SidebarPetComponent } from './sidebar-pet/sidebar-pet.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegisterPetComponent,
    DetailPetComponent,
    EditPetComponent,
    ListPetComponent,
    SidebarPetComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RegisterPetComponent,
    DetailPetComponent,
    EditPetComponent,
    ListPetComponent
  ]
})
export class PetsModule { }
