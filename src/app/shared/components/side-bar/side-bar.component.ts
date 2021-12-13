import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOption: Array<any>,

  } = { defaultOption:[] }

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOption = [
      {
        name:'Servicios',
        router: ['/', 'services']
      },
      {
        name:'Proyectos',
        router: ['/', 'works']
      },
      {
        name:'Conoceme',
        router: ['/', 'about']
      }
    ]
  }

}
