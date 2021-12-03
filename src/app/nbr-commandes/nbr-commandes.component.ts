import { Component, OnInit } from '@angular/core';
import { ConnexionApiService } from '../services/connexion-api.service';

@Component({
  selector: 'app-nbr-commandes',
  templateUrl: './nbr-commandes.component.html',
  styleUrls: ['./nbr-commandes.component.css']
})
export class NbrCommandesComponent implements OnInit {
  
  totalorders:any;


  constructor(private connexionApi: ConnexionApiService) { }

  ngOnInit(): void {
    this.connexionApi.getOrders().subscribe(data =>{this.totalorders = data['hydra:member']});

  }

}
