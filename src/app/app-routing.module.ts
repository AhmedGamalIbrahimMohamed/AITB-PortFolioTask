import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { LanguagesComponent } from './languages/languages.component';
import { ServicesComponent } from './services/services.component';




const routes: Routes = [
{  path:'language', component : LanguagesComponent},
{  path:'service', component : ServicesComponent},
{  path:'about', component : AboutmeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }