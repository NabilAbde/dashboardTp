import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MontantTotalVentesComponent } from './montant-total-ventes/montant-total-ventes.component';

const routes: Routes = [
  { path: "" , component: HomePageComponent},
  {path: "montanttotaldesventes" , component : MontantTotalVentesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
