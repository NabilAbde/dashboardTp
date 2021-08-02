import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
title : string ="Bienvenue sur votre dashboard M.Capard"
  constructor() { }

  ngOnInit(): void {
  }

}
