import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MontantTotalVentesComponent } from './montant-total-ventes/montant-total-ventes.component';
import { NbrCommandesComponent } from './nbr-commandes/nbr-commandes.component';
import { NbrNewClientsComponent } from './nbr-new-clients/nbr-new-clients.component';
import { NbrPaniersComponent } from './nbr-paniers/nbr-paniers.component';
import { TauxPanierLostComponent } from './taux-panier-lost/taux-panier-lost.component';
import { TauxRecComClientsComponent } from './taux-rec-com-clients/taux-rec-com-clients.component';
import { TauxVisitPanierNewComponent } from './taux-visit-panier-new/taux-visit-panier-new.component';
import { TotalProductssellsComponent } from './total-productssells/total-productssells.component';
import { ValeurPanierMoyenComponent } from './valeur-panier-moyen/valeur-panier-moyen.component';

const routes: Routes = [
  { path: "" , component: HomePageComponent},
  {path: "montanttotaldesventes" , component : MontantTotalVentesComponent},
  {path: "nbrcommandes" , component : NbrCommandesComponent},
  {path: "nbrpanniers" , component : NbrPaniersComponent },
  {path: "panniermoyen" , component : ValeurPanierMoyenComponent},
  {path: "nbrnewclients" , component : NbrNewClientsComponent},
  {path: "tauxabandon" , component : TauxPanierLostComponent},
  {path: "tauxreccommandes" , component : TauxRecComClientsComponent},
  {path: "tauxvisitepannier" , component : TauxVisitPanierNewComponent},
  {path: "totaltproduits" , component : TotalProductssellsComponent},
  {path: "not-found" , component : FourOhFourComponent},
  {path: "**" , redirectTo: "not-found"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
