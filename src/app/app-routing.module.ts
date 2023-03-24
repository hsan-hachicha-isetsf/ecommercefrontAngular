import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { ListscategorieComponent } from './scategorie/listscategorie/listscategorie.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { InsertarticleComponent } from './articles/insertarticle/insertarticle.component';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { ModifarticleComponent } from './articles/modifarticle/modifarticle.component';
import { LoginComponent } from './authentification/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorPageComponent } from './Error-page/error-page/error-page.component';

const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path:"larticles",component:ListarticlesComponent},
  {path:"lcategories",component:ListcategoriesComponent},
  {path:"lscategories",component:ListscategorieComponent},
  {path:"lartcard",component:ListarticlescardComponent},
  {path:"insertart", component:InsertarticleComponent},
  {path:"listarticletable", component:ListarticlestableComponent},
  {path:"editarticle/:id",component:ModifarticleComponent},
  {path:"home",component:MenuComponent},
  {path:"login",component:LoginComponent},
  {path: '**',component:ErrorPageComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
