import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  infoText1: String = 'Puedo apoyar tu proyecto de diferentes formas. ¿Qué tal si comenzamos con una entrevista tomando un café?'
  infoText2: String = 'Permiteme brindarte toda la asesoria en tu proyecto para asegurar tu presencia en la web'
  infoText3: String = 'Proceso de evaluación'
  infoText4: String = 'Desarrollo web'
  infoText5: String = 'Creo una presencia en la web que atrae usuarios y convierte visitantes en clientes leales. Organiza tus objetivos que yo me encargo de hacerlos realidad'
  infoText6: String = 'Tecnologías'
  textQuote: String = 'Consigue una cotización'
  textWhatsapp: String = 'WhatsApp'
  textEmail: String = 'Correo Electrónico'

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
