import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MontantTotalVentesComponent } from './montant-total-ventes/montant-total-ventes.component';
import { NbrCommandesComponent } from './nbr-commandes/nbr-commandes.component';
import { NbrPaniersComponent } from './nbr-paniers/nbr-paniers.component';
import { ValeurPanierMoyenComponent } from './valeur-panier-moyen/valeur-panier-moyen.component';
import { NbrNewClientsComponent } from './nbr-new-clients/nbr-new-clients.component';
import { TauxRecComClientsComponent } from './taux-rec-com-clients/taux-rec-com-clients.component';
import { TauxPanierLostComponent } from './taux-panier-lost/taux-panier-lost.component';
import { TauxVisitPanierNewComponent } from './taux-visit-panier-new/taux-visit-panier-new.component';
import { ConversionCommandesComponent } from './conversion-commandes/conversion-commandes.component';
import { TotalProductssellsComponent } from './total-productssells/total-productssells.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MontantTotalVentesComponent,
    NbrCommandesComponent,
    NbrPaniersComponent,
    ValeurPanierMoyenComponent,
    NbrNewClientsComponent,
    TauxRecComClientsComponent,
    TauxPanierLostComponent,
    TauxVisitPanierNewComponent,
    ConversionCommandesComponent,
    TotalProductssellsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
