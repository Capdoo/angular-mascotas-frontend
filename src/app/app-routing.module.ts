import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './index/index.component';
import { DetailPetComponent } from './pets/pages/detail-pet/detail-pet.component';
import { EditPetComponent } from './pets/pages/edit-pet/edit-pet.component';
import { ListPetComponent } from './pets/pages/list-pet/list-pet.component';
import { RegisterPetComponent } from './pets/pages/register-pet/register-pet.component';


const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    //pets
    { path: 'pet-list', component: ListPetComponent},
    { path: 'pet-register', component: RegisterPetComponent},
    { path: 'pet-edit', component: EditPetComponent},
    { path: 'pet-detail', component: DetailPetComponent},
    

    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
