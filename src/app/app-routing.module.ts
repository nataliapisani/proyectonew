import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { TablitaComponent } from './tablita/tablita.component';
import { LinkeoComponent } from './linkeo/linkeo.component';

const routes: Routes = [

{path: 'body', component: BodyComponent},
{path: 'tablita', component:TablitaComponent },
{path: 'linkeo/:id', component: LinkeoComponent},
{path: '', redirectTo:'tablita', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
