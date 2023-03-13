import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { ListPetComponent } from './pets/pages/list-pet/list-pet.component';
import { RegisterPetComponent } from './pets/pages/register-pet/register-pet.component';
import { EditPetComponent } from './pets/pages/edit-pet/edit-pet.component';
import { DetailPetComponent } from './pets/pages/detail-pet/detail-pet.component';

//Guards
import { LoginGuard } from './guards/login.guard';
import { ResourceGuardService } from './guards/resource-guard.service';

const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    { path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
    //pets
    { path: 'list-pet', component: ListPetComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    { path: 'register-pet', component: RegisterPetComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    { path: 'edit-pet', component: EditPetComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    { path: 'detail-pet', component: DetailPetComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
