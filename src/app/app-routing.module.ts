import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MontantTotalVentesComponent } from './montant-total-ventes/montant-total-ventes.component';
import { NbrCommandesComponent } from './nbr-commandes/nbr-commandes.component';
import { NbrPaniersComponent } from './nbr-paniers/nbr-paniers.component';
import { ValeurPanierMoyenComponent } from './valeur-panier-moyen/valeur-panier-moyen.component';

const routes: Routes = [
  { path: "" , component: HomePageComponent},
  {path: "montanttotaldesventes" , component : MontantTotalVentesComponent},
  {path: "nbrcommandes" , component : NbrCommandesComponent},
  {path: "nbrpanniers" , component : NbrPaniersComponent },
  {path: "panniermoyen" , component : ValeurPanierMoyenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
