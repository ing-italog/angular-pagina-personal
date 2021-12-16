import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: Array<any> = []
  imgLogoComputer: any = './assets/images/logo.png'
  imgLogoMovil: any = './assets/images/logoMovil.png'

  constructor() { }

  ngOnInit(): void {
    this.mainMenu = [
      {
        name: 'Servicios',
        router: ['/', 'services']
      },
      {
        name: 'Proyectos',
        router: ['/', 'works']
      },
      {
        name: 'Conoceme',
        router: ['/', 'about']
      }
    ]
  }

}
