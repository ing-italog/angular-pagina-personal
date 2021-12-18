import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {


  textWhatsapp: String = 'WhatsApp'

  infItems: Array<any>=[
    {
      imgLogo: './assets/images/goals.png',
      info: 'Definir objetivos y necesidades'
    },
    {
      imgLogo: './assets/images/priorities.png',
      info: 'Identificar prioridades'
    },
    {
      imgLogo: './assets/images/mvp.png',
      info: 'Definir producto mínimo viable'
    },
    {
      imgLogo: './assets/images/roadmap.png',
      info: 'Crear hoja de ruta'
    }
  ]
  


  constructor() { }

  ngOnInit(): void {    
    
  }

}
