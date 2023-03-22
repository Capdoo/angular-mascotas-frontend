import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//App
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
//Pets
import { ListPetComponent } from './pets/pages/list-pet/list-pet.component';
import { RegisterPetComponent } from './pets/pages/register-pet/register-pet.component';
import { DetailPetComponent } from './pets/pages/detail-pet/detail-pet.component';
//Searchs
import { ListSearchComponent } from './searchs/pages/list-search/list-search.component';
import { CreateSearchComponent } from './searchs/pages/create-search/create-search.component';
import { DetailSearchComponent } from './searchs/pages/detail-search/detail-search.component';
import { MySearchsComponent } from './searchs/pages/my-searchs/my-searchs.component';
import { EditSearchComponent } from './searchs/pages/edit-search/edit-search.component';
//Guards
import { LoginGuard } from './guards/login.guard';
import { ResourceGuardService } from './guards/resource-guard.service';

const routes: Routes = [
    //auth
    { path: '', component: IndexComponent},
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    { path: 'register', component: RegisterComponent, canActivate: [LoginGuard]},
    //pets
    { path: 'list-pet', component: ListPetComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    { path: 'register-pet', component: RegisterPetComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    { path: 'detail-pet', component: DetailPetComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    //searchs
    { path: 'list-searches', component: ListSearchComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    { path: 'create-search', component: CreateSearchComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    { path: 'detail-search', component: DetailSearchComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    { path: 'my-searches', component: MySearchsComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    { path: 'edit-search', component: EditSearchComponent, canActivate: [ResourceGuardService], data: { expectedRol: ['admin', 'user'] }},
    //no route
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
